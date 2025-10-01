import { defineConfig } from 'astro/config';

// Update `site` once the GitHub Pages URL is known
// For a project site: https://<username>.github.io/<repo>/
// Example: site: 'https://your-username.github.io/triton-pickleball/'

export default defineConfig({
  site: 'https://triton-pickleball.github.io/pbwebsite/',
  base: '/pbwebsite/',
  output: 'static'
});


