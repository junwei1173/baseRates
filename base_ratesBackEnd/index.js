const express = require('express');
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // To parse JSON bodies

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'base_ratesBackEnd is running' });
});

app.get('/health', (req, res) => res.sendStatus(200));

// Helper function to get image from Unsplash
async function getProductImage(productName) {
  if (!process.env.UNSPLASH_ACCESS_KEY) {
    console.log('Unsplash API key not set, skipping image fetch');
    return null;
  }

  try {
    const searchQuery = encodeURIComponent(productName);
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=1&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    
    if (!response.ok) {
      console.log(`Unsplash API error: ${response.status}`);
      return null;
    }

    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
      return data.results[0].urls.regular;
    }
    
    return null;
  } catch (error) {
    console.log(`Error fetching image for ${productName}:`, error.message);
    return null;
  }
}

// Gemini route
app.post('/gemini', async (req, res) => {
  const prompt = req.body.prompt;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required in the request body.' });
  }

  // Fallback: use Gemini API for other queries (original behavior)
  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'GEMINI_API_KEY is not set.' });
  }
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    // Updated prompt to exclude image URLs
    const geminiPrompt = `Give me exactly 3 products for sale that match: "${prompt}".\nReturn ONLY a valid JSON array with exactly 3 items, no explanation, no markdown, no code block, no text before or after. Each item must have: name, description, price, and stars (rating out of 5). Do not include image URLs. Example:\n[\n  {"name": "Product Name", "description": "...", "price": "$99.99", "stars": 4.5},\n  {"name": "Product Name 2", "description": "...", "price": "$49.99", "stars": 4.0},\n  {"name": "Product Name 3", "description": "...", "price": "$79.99", "stars": 4.2}\n]`;
    const result = await model.generateContent(geminiPrompt);
    const response = await result.response;
    let text = response.text().trim();
    // Remove code block markers if present
    if (text.startsWith('```json')) {
      text = text.replace(/^```json/, '').replace(/```$/, '').trim();
    } else if (text.startsWith('```')) {
      text = text.replace(/^```/, '').replace(/```$/, '').trim();
    }
    // Remove any leading/trailing non-JSON text
    const firstBracket = text.indexOf('[');
    const lastBracket = text.lastIndexOf(']');
    if (firstBracket !== -1 && lastBracket !== -1) {
      text = text.substring(firstBracket, lastBracket + 1);
    }
    let products;
    try {
      products = JSON.parse(text);
    } catch (e) {
      products = [{ name: 'Error', description: 'Could not parse Gemini response as JSON.', price: '', stars: 0, raw: response.text() }];
    }

    // Enhance products with images from Unsplash
    console.log('Fetching images for products...');
    const enhancedProducts = await Promise.all(
      products.map(async (product) => {
        if (product.name && product.name !== 'Error') {
          console.log(`Fetching image for: ${product.name}`);
          const imageUrl = await getProductImage(product.name);
          product.image = imageUrl;
        }
        return product;
      })
    );

    console.log('Enhanced products with images:', enhancedProducts);
    res.json({ result: enhancedProducts });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
  if (!process.env.GEMINI_API_KEY) {
    console.warn('Warning: GEMINI_API_KEY is not set. Create a .env file or set the environment variable.');
  }
  if (!process.env.UNSPLASH_ACCESS_KEY) {
    console.warn('Warning: UNSPLASH_ACCESS_KEY is not set. Images will not be fetched.');
  }
});



