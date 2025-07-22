const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Set up proxy with error display on web page
app.use('/', createProxyMiddleware({
  target: 'http://34.59.253.118', // Replace with your n8n IP or domain
  changeOrigin: true,
  logLevel: 'debug',

  onError: (err, req, res) => {
    console.error(`[Proxy Error] ${err.message}`);
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end(`
      <h2>❌ Proxy Error</h2>
      <p><strong>Message:</strong> ${err.message}</p>
      <p>🔧 n8n might be down or not reachable at <code>http://34.59.253.118</code>.</p>
    `);
  }
}));

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Proxy app listening on port ${PORT}`);
});
