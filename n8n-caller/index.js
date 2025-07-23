const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// ✅ Define allowed origins
const allowedOrigins = [
  'http://localhost:4200',
  'https://your-app-domain.com',
  'http://34.59.253.118',
  'https://autonomous-routing.uc.r.appspot.com'
];

// ✅ Enable CORS for whitelisted origins
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`❌ CORS rejected origin: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// 🛠 Proxy to n8n backend
app.use('/', createProxyMiddleware({
  target: 'http://34.59.253.118',
  changeOrigin: true,
  logLevel: 'debug',
  onError: (err, req, res) => {
    console.error(`[Proxy Error] ${err.message}`);
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end(`
      <h2>❌ Proxy Error</h2>
      <p><strong>Message:</strong> ${err.message}</p>
      <p>🔧 n8n might be down or unreachable at <code>http://34.59.253.118</code>.</p>
    `);
  }
}));

// 🚀 Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🧭 Proxy server running at http://localhost:${PORT}`);
});
