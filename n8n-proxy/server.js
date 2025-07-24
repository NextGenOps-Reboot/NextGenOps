const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Replace with internal IP of GKE n8n service
const target = 'http://10.128.0.40'; // Example: http://10.12.0.15

app.use('/', createProxyMiddleware({ target, changeOrigin: true }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`);
});
