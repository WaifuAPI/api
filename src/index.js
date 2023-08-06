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
      console.log(
        `${chalk.green(
          '[SUCCESS]'
        )} API is running on: http://localhost:${PORT}/api`
      )
    )
  })
  .catch(error => {
    console.error(error)
  })

// const Users = require('./models/schemas/Users')

// // function to reset token of every user once every 24 hours
// const quotoInterval = setInterval(() => {
//   // query and update all users req_quoto to 250
//   Users.updateMany({}, { $set: { req_quoto: 25 } }, (err, res) => {
//     if (err) console.log(err)
//     console.log(res)
//   })
// }, 5000)




// const Stats = require('./models/schemas/Stat');

// function to reset daily_requests to 0 every 24 hours at 00:00 AM GMT+0
//  setInterval(() => {
  
//   Stats.findByIdAndUpdate(
//     { _id: "systemstats" },
//     { $set: { daily_requests: 0 } }
//   )
//   .then(() => {
//     console.log(`${chalk.green('[SUCCESS]')} Daily requests reset to 0`)
//   })
//   .catch(error => {
//     console.error(error)
//   })
// }, 86400000)


// a interval to update the daily_requests at 00:00 AM GMT+0 
// setInterval(() => {
//   Stats.findByIdAndUpdate(
//     { _id: "systemstats" },
//     { $inc: { daily_requests: 1 } }
//   )
//   .then(() => {
//     console.log(`${chalk.green('[SUCCESS]')} Daily requests incremented`)
//   })
//   .catch(error => {
//     console.error(error)
//   })
// }, 1000)



// function to reset daily_requests to 0 every 24 hours at 00:00 AM GMT+0 using unix timestamp 





