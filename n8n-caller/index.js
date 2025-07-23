const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Replace this with the external IP or domain of your n8n service
const target = 'http://34.59.253.118';

app.use('/', createProxyMiddleware({
  target,
  changeOrigin: true,
  logLevel: 'debug',
  pathRewrite: {
    '^/': '/', // Optional: keep path same
  },
  onProxyReq: (proxyReq, req, res) => {
    // Force Origin header to match what n8n expects
    proxyReq.setHeader('origin', 'https://autonomous-routing.uc.r.appspot.com');
  },
  onError: (err, req, res) => {
    console.error(`[Proxy Error] ${err.message}`);
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end(`
      <h2>❌ Proxy Error</h2>
      <p><strong>Message:</strong> ${err.message}</p>
      <p>🔧 n8n might be down or not reachable at <code>${target}</code>.</p>
    `);
  },
}));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Proxy listening on port ${PORT}, forwarding to ${target}`);
});
