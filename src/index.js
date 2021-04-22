/* eslint-disable no-console */

require('dotenv').config()
const mongoose = require('mongoose')
const chalk = require('chalk')
const app = require('./app')

// PORT
const PORT = process.env.PORT || 4000

// NODE ENV LOGGER
if (process.env.NODE_ENV === 'development') {
  console.log(
    `${chalk.yellow(
      '[DEBUG]'
    )} You've enabled developer mode. Now your console will be dirty.`
  )
}

// Connect to database, then start's the Express server
mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`${chalk.green('[SUCCESS]')} API is running on port: ${PORT}`)
    )
  })
  .catch(error => {
    console.error(error)
  })
