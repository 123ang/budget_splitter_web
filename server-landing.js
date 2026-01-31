/**
 * Landing page only – no database, no API.
 * Use when you only want to preview the landing page locally
 * (e.g. on Windows without Visual Studio C++ for better-sqlite3).
 *
 * Run: npm run landing
 * Open: http://localhost:3012
 */

const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3012;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', (req, res) => {
  res.json({ status: 'ok', mode: 'landing-only', port: PORT });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Landing page at http://localhost:${PORT}`);
});
