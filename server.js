const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const port = process.env.PORT || 3000;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// For Vercel serverless function
module.exports = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;
  
  // Handle root path
  if (pathname === '/') {
    pathname = '/index.html';
  }
  
  // Remove leading slash for file path
  let filePath = pathname.substring(1);
  
  // If no file extension and not a known file, default to index.html
  if (!path.extname(filePath) && filePath !== 'index.html') {
    filePath = 'index.html';
  }
  
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';
  
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // Try to serve index.html for SPA routing
        fs.readFile('index.html', (err, indexContent) => {
          if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - File Not Found</h1>', 'utf-8');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(indexContent, 'utf-8');
          }
        });
      } else {
        res.writeHead(500);
        res.end('Server Error: ' + error.code + ' ..\n');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
};

// For local development
if (require.main === module) {
  const server = http.createServer(module.exports);
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
}