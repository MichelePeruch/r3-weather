# R3 Weather

A tiny weather lookup page, used as a git + deployment learning lab.

## Local setup

    cp .env.example .env      # then edit .env and add your real key
    node build.js             # generates config.js
    open index.html

## Deployment

Deployed to GitHub Pages by GitHub Actions on every push to `main`.
The API key is supplied by the `WEATHER_API_KEY` repository secret.
