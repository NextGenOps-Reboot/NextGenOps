const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/',
  createProxyMiddleware({
    target: 'http://34.59.253.118', // Your n8n backend IP
    changeOrigin: true,
    logLevel: 'debug',

    /**
     * Override the origin header to match what n8n expects
     */
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader('Origin', 'http://34.59.253.118'); // 👈 match n8n's expected origin
    },

    /**
     * Optional: Handle errors gracefully
     */
    onError: (err, req, res) => {
      console.error(`[Proxy Error] ${err.message}`);
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end(`
        <h2>❌ Proxy Error</h2>
        <p><strong>Message:</strong> ${err.message}</p>
        <p>🔧 n8n might be down or not reachable at <code>http://34.59.253.118</code>.</p>
      `);
    },
  })
);

// Start App Engine proxy server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Proxy app listening on port ${PORT}`);
});
