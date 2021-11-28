/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    render: { url: '/dist'},
    assets: { url: '/', static: true },
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-typescript'
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    "baseUrl": "./"
  },
};
