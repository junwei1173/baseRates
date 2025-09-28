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

// Gemini route
app.post('/gemini', async (req, res) => {
  const prompt = req.body.prompt;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required in the request body.' });
  }


  // ...existing code...

  // Fallback: use Gemini API for other queries (original behavior)
  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'GEMINI_API_KEY is not set.' });
  }
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    // Strict prompt for Gemini
    const geminiPrompt = `Give me exactly 3 products for sale that match: "${prompt}".\nReturn ONLY a valid JSON array, no explanation, no markdown, no code block, no text before or after. Each item must have: name, description, price, image (URL if possible), and stars (rating out of 5). Example:\n[\n  {"name": "Product Name", "description": "...", "price": "$99.99", "image": "https://...", "stars": 4.5},\n  ...\n]`;
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
      products = [{ name: 'Error', description: 'Could not parse Gemini response as JSON.', price: '', image: null, stars: 0, raw: response.text() }];
    }
    res.json({ result: products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
  if (!process.env.GEMINI_API_KEY) {
    console.warn('Warning: GEMINI_API_KEY is not set. Create a .env file or set the environment variable.');
  }
});