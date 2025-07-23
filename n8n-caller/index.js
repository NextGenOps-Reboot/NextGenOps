const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const target = 'http://34.57.86.253'; // GKE Ingress IP

app.use('/', createProxyMiddleware({
  target,
  changeOrigin: true,
  ws: true, // 🔥 WebSocket support
  pathRewrite: {
    '^/': '/',
  },
  onProxyReq: (proxyReq) => {
    proxyReq.setHeader('origin', target);
  }
}));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Proxy running on port ${PORT}, forwarding to ${target}`);
});
