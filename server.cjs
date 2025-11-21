// server.js - production server for Linux App Service

const express = require("express");
const path = require("path");
const helmet = require("helmet");

const app = express();

// --- Security headers via Helmet (basic) ---
app.use(
  helmet({
    contentSecurityPolicy: false, // we'll set CSP manually below
  })
);

// --- Custom security headers (what AppScan expects) ---
const CSP =
  "default-src 'self'; " +
  "script-src 'self'; " +
  "style-src 'self' 'unsafe-inline'; " +
  "img-src 'self' data: blob:; " +
  "font-src 'self' data:; " +
  "connect-src 'self'; " +
  "frame-ancestors 'none'; " +
  "base-uri 'self'; " +
  "form-action 'self';";

const ALLOWED_HOST = "monopoly-freneg6ghmfjf3hw.centralindia-01.azurewebsites.net";

app.use((req, res, next) => {
  // Host header injection protection
  const host = req.headers.host;
  if (host && host.toLowerCase() !== ALLOWED_HOST.toLowerCase()) {
    // You can also redirect instead of 400 if you prefer
    return res.status(400).send("Bad Request");
  }

  // Security headers
  res.setHeader("Content-Security-Policy", CSP);
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  res.setHeader("X-Frame-Options", "DENY");

  // CORS: do NOT set Access-Control-Allow-Origin here (same-origin SPA),
  // so AppScan will not see overly-permissive CORS.
  next();
});

// Serve static files from dist
const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath));

/// SPA fallback (fix for path-to-regexp error)
app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Monopoly app listening on port ${port}`);
});
