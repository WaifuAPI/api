/* eslint-disable no-console */

// Importing configuration modules
import '../config.js';
import 'dotenv/config';

// Importing external modules
import mongoose from 'mongoose';
import chalk from 'chalk';
import app from './app.js';

// Setting up the server port
const PORT = process.env.PORT || 4000;

/*
  Logging developer mode information for the Node environment
*/
if (process.env.NODE_ENV === 'development') {
  console.log(`${chalk.yellow('[DEBUG]')} Developer mode enabled. Console logging is active.`);
}

/*
  Connect to the MongoDB database, then start the Express server
*/
mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    /*
      Starting the Express server and logging success message
    */
    app.listen(PORT, () => {
      console.log(`${chalk.green('[SUCCESS]')} API is running on: http://localhost:${PORT}/api`);
    });
  })
  .catch(error => {
    /*
      Logging errors during database connection
    */
    console.error(error);
  });
