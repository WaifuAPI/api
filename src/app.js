const express = require('express');
const cors = require('cors');
const next = require('next');
const path = require('path');

// Import custom error handlers and logger
const {
  handler404,
  errorsLogger,
  errorsHandler,
} = require('./handlers/errors/index');
const { ipLogger } = require('./handlers/logger/ip');
const routes = require('./routes');

// Set development mode
const dev = process.env.NODE_ENV !== 'production';

// Initialize Next.js app
const nextApp = next({ dev, dir: path.join(__dirname, '../website') });
const handle = nextApp.getRequestHandler();

// Express APP
const app = express();

// Enable CORS for all routes
app.use(cors());

// Trust the first proxy (when running behind a reverse proxy like Nginx)
app.set('trust proxy', 1);

// Middleware to parse JSON-encoded bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));


// Logger middleware
// Uncomment the following block if you want to enable IP logging
if (process.env.LOGGER === 'true') {
  app.use(ipLogger);
}

// Custom API routes
app.use(routes);

// Serve Next.js static files from the frontend folder
app.use('/', express.static(path.join(__dirname, '../website/out')));

// Handle server-side rendering for Next.js pages
app.get('*', (req, res) => {
  return handle(req, res);
});

// Error handling middleware
app.use(handler404, errorsLogger, errorsHandler);

module.exports = app;
