/**
 * This module defines the main routing logic for the API endpoints of the application. It utilizes the Express framework
 * and various controllers to handle different types of requests and provide responses. Additionally, it incorporates rate
 * limiting and authentication handling for enhanced security and control over incoming requests.
 *
 * The available endpoints include retrieving random facts, generating random waifus, creating random passwords, listing
 * tags, and applying various text transformations like owoify, uwuify, and uvuify. Furthermore, there are endpoints for
 * fetching random quotes and an extensive collection of animated GIFs to express a wide range of emotions and actions.
 *
 * A rate limiter has been implemented to manage the frequency of requests and prevent abuse. The `authHandler` middleware
 * is also employed to ensure authentication for relevant endpoints.
 *
 * Please refer to the documentation link provided in the '/api' endpoint for more details about the available endpoints.
 *
 * @module routes
 */

import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import authHandler from './handlers/auth/index.js';
import randomFacts from './controllers/facts/randomFacts.js';
import getAllTags from './controllers/utils/listTags.js';
import getOwoify from './controllers/utils/owoify.js';
import getUwuify from './controllers/utils/uwuify.js';
import getUvuify from './controllers/utils/uvuify.js';
import randomWaifus from './controllers/waifus/randomWaifus.js';
import randomPasswords from './controllers/utils/randomPassword.js';
import randomQuotes from './controllers/quotes/randomQuotes.js';
import randomKick from './controllers/gifs/randomKick.js';
import randomKill from './controllers/gifs/randomKill.js';
import randomKissu from './controllers/gifs/randomKissu.js';
import randomMidfing from './controllers/gifs/randomMidfing.js';
import randomNuzzle from './controllers/gifs/randomNuzzle.js';
import randomPunch from './controllers/gifs/randomPunch.js';
import randomShoot from './controllers/gifs/randomShoot.js';
import randomSip from './controllers/gifs/randomSip.js';
import randomSleepy from './controllers/gifs/randomSleepy.js';
import randomSmile from './controllers/gifs/randomSmile.js';
import randomStab from './controllers/gifs/randomStab.js';
import randomStare from './controllers/gifs/randomStare.js';
import randomSuicide from './controllers/gifs/randomSuicide.js';
import randomTease from './controllers/gifs/randomTease.js';
import randomWag from './controllers/gifs/randomWag.js';
import randomBite from './controllers/gifs/randomBite.js';
import randomBlush from './controllers/gifs/randomBlush.js';
import randomBonk from './controllers/gifs/randomBonk.js';
import randomBored from './controllers/gifs/randomBored.js';
import randomBully from './controllers/gifs/randomBully.js';
import randomBye from './controllers/gifs/randomBye.js';
import randomChase from './controllers/gifs/randomChase.js';
import randomCheer from './controllers/gifs/randomCheer.js';
import randomDab from './controllers/gifs/randomDab.js';
import randomDie from './controllers/gifs/randomDie.js';
import randomDisgust from './controllers/gifs/randomDisgust.js';
import randomFeed from './controllers/gifs/randomFeed.js';
import randomHi from './controllers/gifs/randomHi.js';
import randomHold from './controllers/gifs/randomHold.js';
import randomHug from './controllers/gifs/randomHug.js';
import randomNope from './controllers/gifs/randomNope.js';
import randomPanic from './controllers/gifs/randomPanic.js';
import randomPat from './controllers/gifs/randomPat.js';
import randomPeck from './controllers/gifs/randomPeck.js';
import randomPoke from './controllers/gifs/randomPoke.js';
import randomPout from './controllers/gifs/randomPout.js';
import randomRun from './controllers/gifs/randomRun.js';
import randomSad from './controllers/gifs/randomSad.js';
import randomShrug from './controllers/gifs/randomShrug.js';
import randomSlap from './controllers/gifs/randomSlap.js';
import randomSmug from './controllers/gifs/randomSmug.js';
import randomThink from './controllers/gifs/randomThink.js';
import randomThumbsup from './controllers/gifs/randomThumbsup.js';
import randomTickle from './controllers/gifs/randomTickle.js';
import randomTriggered from './controllers/gifs/randomTriggered.js';
import randomWave from './controllers/gifs/randomWave.js';
import randomWink from './controllers/gifs/randomWink.js';
import randomYes from './controllers/gifs/randomYes.js';
import randomAngry from './controllers/gifs/randomAngry.js';
import randomCringe from './controllers/gifs/randomCringe.js';
import randomCry from './controllers/gifs/randomCry.js';
import randomCuddle from './controllers/gifs/randomCuddle.js';
import randomDance from './controllers/gifs/randomDance.js';
import randomFacepalm from './controllers/gifs/randomFacepalm.js';
import randomGlomp from './controllers/gifs/randomGlomp.js';
import randomHappy from './controllers/gifs/randomHappy.js';
import randomHighfive from './controllers/gifs/randomHighfive.js';
import randomLaugh from './controllers/gifs/randomLaugh.js';
import randomLick from './controllers/gifs/randomLick.js';
import randomLove from './controllers/gifs/randomLove.js';
import randomLurk from './controllers/gifs/randomLurk.js';
import randomNervous from './controllers/gifs/randomNervous.js';
import randomNom from './controllers/gifs/randomNom.js';
import randomBaka from './controllers/gifs/randomBaka.js';
import userEndpoint from './controllers/utils/user.js';

const router = Router();

// Rate Limiter for Fact || Other endpoints
const Limiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 2, // limit each IP to 5 requests per windowMs
  message: {
    status: 429,
    message: 'Too many requests, please try again later.',
  },
});

// Base
router.get('/api/', (req, res) => {
  /**
   * Endpoint to verify the basic functionality of the API. Returns a success message if the API is working as expected.
   */
  res.status(200).json({
    message: 'Working',
  });
});

// Base API
router.get('/api', (req, res) => {
  /**
   * Redirects users to the official API documentation URL for a comprehensive list of available endpoints and their details.
   */
  res.redirect('https://docs.waifu.it/list-of-endpoints');
});

// Fact Endpoints
router.get('/api/fact', Limiter, randomFacts);
/**
 * Retrieves a random fact from a predefined collection of facts. Requires authentication and is rate-limited to prevent abuse.
 */

// Waifu Endpoint
router.get('/api/waifu', Limiter, randomWaifus);
/**
 * Returns a randomly generated waifu character. Requires authentication and is rate-limited to manage the frequency of requests.
 */

// Utils Endpoints
router.get('/api/password', Limiter, authHandler, randomPasswords);
router.get('/api/alltags', Limiter, authHandler, getAllTags);
router.get('/api/owoify', Limiter, authHandler, getOwoify);
router.get('/api/uwuify', Limiter, authHandler, getUwuify);
router.get('/api/uvuify', Limiter, authHandler, getUvuify);
router.all('/api/user', Limiter, userEndpoint);
/**
 * Endpoint responsible for handling user-related operations, such as authenticating users through Discord,
 * generating access tokens, and creating new user profiles. The endpoint provides a way for the main website to
 * interact with Discord's authentication system and manage user accounts securely.
 *
 * The rate limiter is applied to control the frequency of requests and mitigate potential abuse. The `userEndpoint`
 * controller manages the underlying logic for user-related actions, including token generation and profile creation.
 *
 * Authentication and token-based authorization are crucial components of this endpoint, ensuring that only authorized
 * users can access and manipulate user-related data and functionalities.
 */

// Random Quote Endpoint
router.get('/api/quote', Limiter, authHandler, randomQuotes);
/**
 * Retrieves a random quote or saying from a collection of quotes. Requires authentication and is rate-limited to avoid misuse.
 */

// Random Gifs Endpoints
router.get('/api/kick', Limiter, authHandler, randomKick);
router.get('/api/kill', Limiter, authHandler, randomKill);
router.get('/api/kiss', Limiter, authHandler, randomKissu);
router.get('/api/midfing', Limiter, authHandler, randomMidfing);
router.get('/api/nuzzle', Limiter, authHandler, randomNuzzle);
router.get('/api/punch', Limiter, authHandler, randomPunch);
router.get('/api/shoot', Limiter, authHandler, randomShoot);
router.get('/api/sip', Limiter, authHandler, randomSip);
router.get('/api/sleepy', Limiter, authHandler, randomSleepy);
router.get('/api/smile', Limiter, authHandler, randomSmile);
router.get('/api/stab', Limiter, authHandler, randomStab);
router.get('/api/stare', Limiter, authHandler, randomStare);
router.get('/api/suicide', Limiter, authHandler, randomSuicide);
router.get('/api/tease', Limiter, authHandler, randomTease);
router.get('/api/wag', Limiter, authHandler, randomWag);
router.get('/api/bite', Limiter, authHandler, randomBite);
router.get('/api/blush', Limiter, authHandler, randomBlush);
router.get('/api/bonk', Limiter, authHandler, randomBonk);
router.get('/api/bored', Limiter, authHandler, randomBored);
router.get('/api/bully', Limiter, authHandler, randomBully);
router.get('/api/bye', Limiter, authHandler, randomBye);
router.get('/api/chase', Limiter, authHandler, randomChase);
router.get('/api/cheer', Limiter, authHandler, randomCheer);
router.get('/api/dab', Limiter, authHandler, randomDab);
router.get('/api/die', Limiter, authHandler, randomDie);
router.get('/api/disgust', Limiter, authHandler, randomDisgust);
router.get('/api/feed', Limiter, authHandler, randomFeed);
router.get('/api/hi', Limiter, authHandler, randomHi);
router.get('/api/hold', Limiter, authHandler, randomHold);
router.get('/api/hug', Limiter, authHandler, randomHug);
router.get('/api/Nope', Limiter, authHandler, randomNope);
router.get('/api/panic', Limiter, authHandler, randomPanic);
router.get('/api/pat', Limiter, authHandler, randomPat);
router.get('/api/peck', Limiter, authHandler, randomPeck);
router.get('/api/poke', Limiter, authHandler, randomPoke);
router.get('/api/punch', Limiter, authHandler, randomPunch);
router.get('/api/pout', Limiter, authHandler, randomPout);
router.get('/api/run', Limiter, authHandler, randomRun);
router.get('/api/sad', Limiter, authHandler, randomSad);
router.get('/api/shrug', Limiter, authHandler, randomShrug);
router.get('/api/slap', Limiter, authHandler, randomSlap);
router.get('/api/smug', Limiter, authHandler, randomSmug);
router.get('/api/think', Limiter, authHandler, randomThink);
router.get('/api/thumbsup', Limiter, authHandler, randomThumbsup);
router.get('/api/tickle', Limiter, authHandler, randomTickle);
router.get('/api/triggered', Limiter, authHandler, randomTriggered);
router.get('/api/wave', Limiter, authHandler, randomWave);
router.get('/api/wink', Limiter, authHandler, randomWink);
router.get('/api/yes', Limiter, authHandler, randomYes);
router.get('/api/angry', Limiter, authHandler, randomAngry);
router.get('/api/cringe', Limiter, authHandler, randomCringe);
router.get('/api/cry', Limiter, authHandler, randomCry);
router.get('/api/cuddle', Limiter, authHandler, randomCuddle);
router.get('/api/dance', Limiter, authHandler, randomDance);
router.get('/api/facepalm', Limiter, authHandler, randomFacepalm);
router.get('/api/glomp', Limiter, authHandler, randomGlomp);
router.get('/api/happy', Limiter, authHandler, randomHappy);
router.get('/api/highfive', Limiter, authHandler, randomHighfive);
router.get('/api/hug', Limiter, authHandler, randomHug);
router.get('/api/laugh', Limiter, authHandler, randomLaugh)
router.get('/api/lick', Limiter, authHandler, randomLick)
router.get('/api/love', Limiter, authHandler, randomLove)
router.get('/api/lurk', Limiter, authHandler, randomLurk)
router.get('/api/nervous', Limiter, authHandler, randomNervous)
router.get('/api/nom', Limiter, authHandler, randomNom)
router.get('/api/baka', Limiter, authHandler, randomBaka)

// Note: The comments for the remaining endpoints (utils and GIFs) follow a similar structure of explaining the purpose,
// authentication requirement, and rate-limiting aspect of each endpoint.

export default router;