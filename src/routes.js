const { Router } = require('express')
const rateLimit = require('express-rate-limit')
const authHandler = require('./handlers/auth/index')
const getFactbyId = require('./controllers/facts/getFactbyId')
const randomFacts = require('./controllers/facts/randomFacts')
const getAllTags = require('./controllers/tags/listTags')
const randomWaifus = require('./controllers/waifus/randomWaifus')
const randomPasswords = require('./controllers/passwords/randomPassword')

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

// Fact Endpoints
router.get('/api/fact', Limiter, authHandler, randomFacts)
router.get('/api/facts/:id', Limiter, authHandler, getFactbyId)

// Tags Endpoint
router.get('/api/alltags', Limiter, authHandler, getAllTags)

// Waifu Endpoint
router.get('/api/waifu', Limiter, authHandler, randomWaifus)

// Random Password Endpoint
router.get('/api/password', Limiter, randomPasswords)

module.exports = router
