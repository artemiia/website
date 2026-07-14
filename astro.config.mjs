import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pilotprotocol.network',
  build: {
    format: 'preserve',
  },
  trailingSlash: 'ignore',
  vite: {
    // Allow the dev server to be reached through a Cloudflare quick tunnel
    // (*.trycloudflare.com) when sharing a preview. Harmless in local dev.
    server: {
      allowedHosts: ['.trycloudflare.com'],
    },
  },
});
