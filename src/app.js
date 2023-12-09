import express from 'express';
import cors from 'cors';

// Import custom error handlers and logger
import {
  handler404,
  errorsLogger,
  errorsHandler,
} from './handlers/errors/index.js';
import { ipLogger } from './handlers/logger/ip.js';
import routes from './routes.js';

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

// Error handling middleware
app.use(handler404, errorsLogger, errorsHandler);

export default app;
