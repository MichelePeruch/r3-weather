// The API key is NOT in this file. It arrives via config.js,
// which is generated at build time from an environment variable.
const API_KEY = window.APP_CONFIG.apiKey;

async function lookup(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API returned ${res.status}`);
  return res.json();
}

document.getElementById('go').addEventListener('click', async () => {
  const city = document.getElementById('city').value;
  const out = document.getElementById('out');
  out.textContent = 'Loading...';
  try {
    const data = await lookup(city);
    out.textContent = `${data.name}: ${Math.round(data.main.temp)}°C · ${data.main.humidity}% humidity`;
  } catch (err) {
    out.textContent = `Error: ${err.message}`;
  }
});
