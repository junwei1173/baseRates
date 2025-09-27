const express = require('express');
// Load environment variables from .env in development
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'base_ratesBackEnd is running' });
});

app.get('/health', (req, res) => res.sendStatus(200));

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
  // Warn if API key is missing (do not log the key itself)
  if (!process.env.GEMINI_API_KEY) {
    console.warn('Warning: GEMINI_API_KEY is not set. Create a .env file or set the environment variable.');
  }
});
