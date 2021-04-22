const { Router } = require('express')
const rateLimit = require('express-rate-limit')
const authHandler = require('./handlers/auth/index')
const getFactbyId = require('./controllers/facts/getFactbyId')
const randomFacts = require('./controllers/facts/randomFacts')
const getAllTags = require('./controllers/tags/listTags')
const randomWaifus = require('./controllers/waifus/randomWaifus')

const router = Router()

// Rate Limiter for Fact || Other endpoints
const Limiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 15, // limit each IP to 15 requests per windowMs
  message: {
    status: 429,
    message: 'Too many requests, please try again later.',
  },
})

// Facts Endpoint
router.get('/fact', Limiter, authHandler, randomFacts)
router.get('/facts/:id', Limiter, authHandler, getFactbyId)

// Tags Endpoint
router.get('/alltags', Limiter, authHandler, getAllTags)

// Waifu Endpoint
router.get('/waifu', Limiter, authHandler, randomWaifus)

module.exports = router
