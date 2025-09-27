# baseRates

How to set up backend API:

1. Be in main (git checkout main) and use 'git pull' to ensure it is updated

2. git checkout backfront

3. cd base_ratesBackEnd.

4. Make a new terminal and also do the same; cd base_ratesBackEnd

5. you only need to do this on one terminal, but ensure both are in base_ratesBackEnd before doing the install

6. Do 'nmp install' and right after do 'npm install @google/generative-ai@latest'

7. ENSURE THAT YOU HAVE A .env FILE, IF NOT YOU CAN MAKE A NEW ONE INSIDE OF 'base_ratesBackEnd' FOLDER.

7a(copy this into .env file:
GEMINI_API_KEY=AIzaSyD0dh0NAhCMwo18KaK5zlKoRkrUysbQOAQ
PORT=3000

8.run 'npm start' first on one terminal, and run on the other terminal second;

curl -X POST http://localhost:3000/gemini \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Test product search"}'

on the other terminal to ensure functionality.


