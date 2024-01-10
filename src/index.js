/* eslint-disable no-console */

// Importing configuration modules
import '../config.js';
import 'dotenv/config';

// Importing external modules
import mongoose from 'mongoose';
import chalk from 'chalk';
import app from './app.js';

/**
 * Server setup script for initializing the Express server and connecting to the MongoDB database.
 *
 * @function
 * @throws {Error} If there is an error during database connection or server start.
 *
 * @returns {void}
 */
const setupServer = async () => {
  try {
    /**
     * Setting up the server port.
     * @type {number}
     */
    const PORT = process.env.PORT || 4000;

    /**
     * Logging developer mode information for the Node environment.
     * @type {string}
     */
    if (process.env.NODE_ENV === 'development') {
      console.log(`${chalk.yellow('[DEBUG]')} Developer mode enabled. Console logging is active.`);
    }

    /**
     * Connecting to the MongoDB database.
     * @type {mongoose.Connection}
     */
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    /**
     * Starting the Express server and logging success message.
     * @type {void}
     */
    app.listen(PORT, () => {
      console.log(`${chalk.green('[SUCCESS]')} API is running on: http://localhost:${PORT}/api`);
    });

    // Return the database connection for potential future use
    return dbConnection;
  } catch (error) {
    /**
     * Logging errors during database connection or server start.
     * @type {Error}
     */
    console.error(error);
    throw error;
  }
};

// Call the setup function
setupServer();
