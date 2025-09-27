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
  console.log('GEMINI_API_KEY:', process.env.GEMINI_API_KEY);
  const prompt = req.body.prompt;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required in the request body.' });
  }
  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'GEMINI_API_KEY is not set.' });
  }
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    res.json({ result: response.text() });
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