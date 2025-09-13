const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware for parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// API routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Express server is running' });
});

// Specific routes for your pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/launch-product', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/research', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/strategy', (req, res) => {
  console.log('Strategy route accessed');
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/management', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Catch all handler for SPA routing
app.get('*', (req, res) => {
  console.log(`Fallback route accessed: ${req.path}`);
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
  console.log(`Available routes:`);
  console.log(`- http://localhost:${PORT}/`);
  console.log(`- http://localhost:${PORT}/launch-product`);
  console.log(`- http://localhost:${PORT}/research`);
  console.log(`- http://localhost:${PORT}/strategy`);
  console.log(`- http://localhost:${PORT}/management`);
});

module.exports = app;