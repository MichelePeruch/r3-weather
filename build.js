// Reads the API key from the environment and writes config.js.
// In development the key comes from .env; in production it comes
// from a GitHub Actions secret. The key never lives in the repo.
const fs = require('fs');

const key = process.env.WEATHER_API_KEY;
if (!key) {
  console.error('ERROR: WEATHER_API_KEY is not set. Copy .env.example to .env and fill it in.');
  process.exit(1);
}

fs.writeFileSync('config.js', `window.APP_CONFIG = { apiKey: ${JSON.stringify(key)} };\n`);
console.log('Wrote config.js');
