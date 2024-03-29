/**
 * This module defines the main routing logic for the API endpoints of the application. It utilizes the Express framework
 * and various controllers v3/to handle different types of requests and provide responses. Additionally, it incorporates rate
 * limiting and authentication handling for enhanced security and control over incoming requests.
 *
 * The available endpoints include retrieving random facts, generating random waifus, creating random passwords, listing
 * tags, and applying various text transformations like owoify, uwuify, and uvuify. Furthermore, there are endpoints for
 * fetching random quotes and an extensive collection of animated GIFs to express a wide range of emotions and actions.
 *
 * A rate createRateLimiter() has been implemented to manage the frequency of requests and prevent abuse. The `authorize(config.roles.USER)` middleware
 * is also employed to ensure authentication for relevant endpoints.
 *
 * Please refer to the documentation link provided in the '/api' endpoint for more details about the available endpoints.
 *
 * @module routes
 */

import { Router } from 'express';
import createRateLimiter from '../../middlewares/rateLimit.js';
import authorize from '../../middlewares/authorize.js';
import randomFacts from '../../controllers/v3/facts/randomFacts.js';
import getAllTags from '../../controllers/v3/utils/listTags.js';
import getOwoify from '../../controllers/v3/utils/owoify.js';
import getUwuify from '../../controllers/v3/utils/uwuify.js';
import getUvuify from '../../controllers/v3/utils/uvuify.js';
import randomWaifus from '../../controllers/v3/waifus/randomWaifus.js';
import randomPasswords from '../../controllers/v3/utils/randomPassword.js';
import randomQuotes from '../../controllers/v3/quotes/randomQuotes.js';
import randomKick from '../../controllers/v3/gifs/randomKick.js';
import randomKill from '../../controllers/v3/gifs/randomKill.js';
import randomKissu from '../../controllers/v3/gifs/randomKissu.js';
import randomMidfing from '../../controllers/v3/gifs/randomMidfing.js';
import randomNuzzle from '../../controllers/v3/gifs/randomNuzzle.js';
import randomPunch from '../../controllers/v3/gifs/randomPunch.js';
import randomShoot from '../../controllers/v3/gifs/randomShoot.js';
import randomSip from '../../controllers/v3/gifs/randomSip.js';
import randomSleepy from '../../controllers/v3/gifs/randomSleepy.js';
import randomSmile from '../../controllers/v3/gifs/randomSmile.js';
import randomStab from '../../controllers/v3/gifs/randomStab.js';
import randomStare from '../../controllers/v3/gifs/randomStare.js';
import randomSuicide from '../../controllers/v3/gifs/randomSuicide.js';
import randomTease from '../../controllers/v3/gifs/randomTease.js';
import randomWag from '../../controllers/v3/gifs/randomWag.js';
import randomBite from '../../controllers/v3/gifs/randomBite.js';
import randomBlush from '../../controllers/v3/gifs/randomBlush.js';
import randomBonk from '../../controllers/v3/gifs/randomBonk.js';
import randomBored from '../../controllers/v3/gifs/randomBored.js';
import randomBully from '../../controllers/v3/gifs/randomBully.js';
import randomBye from '../../controllers/v3/gifs/randomBye.js';
import randomChase from '../../controllers/v3/gifs/randomChase.js';
import randomCheer from '../../controllers/v3/gifs/randomCheer.js';
import randomDab from '../../controllers/v3/gifs/randomDab.js';
import randomDie from '../../controllers/v3/gifs/randomDie.js';
import randomDisgust from '../../controllers/v3/gifs/randomDisgust.js';
import randomFeed from '../../controllers/v3/gifs/randomFeed.js';
import randomHi from '../../controllers/v3/gifs/randomHi.js';
import randomHold from '../../controllers/v3/gifs/randomHold.js';
import randomHug from '../../controllers/v3/gifs/randomHug.js';
import randomNope from '../../controllers/v3/gifs/randomNope.js';
import randomPanic from '../../controllers/v3/gifs/randomPanic.js';
import randomPat from '../../controllers/v3/gifs/randomPat.js';
import randomPeck from '../../controllers/v3/gifs/randomPeck.js';
import randomPoke from '../../controllers/v3/gifs/randomPoke.js';
import randomPout from '../../controllers/v3/gifs/randomPout.js';
import randomRun from '../../controllers/v3/gifs/randomRun.js';
import randomSad from '../../controllers/v3/gifs/randomSad.js';
import randomShrug from '../../controllers/v3/gifs/randomShrug.js';
import randomSlap from '../../controllers/v3/gifs/randomSlap.js';
import randomSmug from '../../controllers/v3/gifs/randomSmug.js';
import randomThink from '../../controllers/v3/gifs/randomThink.js';
import randomThumbsup from '../../controllers/v3/gifs/randomThumbsup.js';
import randomTickle from '../../controllers/v3/gifs/randomTickle.js';
import randomTriggered from '../../controllers/v3/gifs/randomTriggered.js';
import randomWave from '../../controllers/v3/gifs/randomWave.js';
import randomWink from '../../controllers/v3/gifs/randomWink.js';
import randomYes from '../../controllers/v3/gifs/randomYes.js';
import randomAngry from '../../controllers/v3/gifs/randomAngry.js';
import randomCringe from '../../controllers/v3/gifs/randomCringe.js';
import randomCry from '../../controllers/v3/gifs/randomCry.js';
import randomCuddle from '../../controllers/v3/gifs/randomCuddle.js';
import randomDance from '../../controllers/v3/gifs/randomDance.js';
import randomFacepalm from '../../controllers/v3/gifs/randomFacepalm.js';
import randomGlomp from '../../controllers/v3/gifs/randomGlomp.js';
import randomHappy from '../../controllers/v3/gifs/randomHappy.js';
import randomHighfive from '../../controllers/v3/gifs/randomHighfive.js';
import randomLaugh from '../../controllers/v3/gifs/randomLaugh.js';
import randomLick from '../../controllers/v3/gifs/randomLick.js';
import randomLove from '../../controllers/v3/gifs/randomLove.js';
import randomLurk from '../../controllers/v3/gifs/randomLurk.js';
import randomNervous from '../../controllers/v3/gifs/randomNervous.js';
import randomNom from '../../controllers/v3/gifs/randomNom.js';
import randomBaka from '../../controllers/v3/gifs/randomBaka.js';
import userEndpoint from '../../controllers/v3/utils/user.js';

const router = Router();

// Base
router.get('/', (req, res) => {
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

// Route: GET /api/v3
// Description: Endpoint to verify the basic functionality of the API. Returns a success message if the API is working as expected.
router.get('/api/v3', (req, res) => {
  // Response with a success message and the current API version
  res.status(200).json({
    version: '3.4.14',
    message: 'API is functioning correctly.',
  });
});

// Fact Endpoints
router.get('/api/v3/fact', createRateLimiter(), authorize(config.roles.USER), randomFacts);
/**
 * Retrieves a random fact from a predefined collection of facts. Requires authentication and is rate-limited to prevent abuse.
 */

// Waifu Endpoint
router.get('/api/v3/waifu', createRateLimiter(), authorize(config.roles.USER), randomWaifus);
/**
 * Returns a randomly generated waifu character. Requires authentication and is rate-limited to manage the frequency of requests.
 */

// Utils Endpoints
router.get('/api/v3/password', createRateLimiter(), authorize(config.roles.USER), randomPasswords);
router.get('/api/v3/alltags', createRateLimiter(), authorize(config.roles.USER), getAllTags);
router.get('/api/v3/owoify', createRateLimiter(), authorize(config.roles.USER), getOwoify);
router.get('/api/v3/uwuify', createRateLimiter(), authorize(config.roles.USER), getUwuify);
router.get('/api/v3/uvuify', createRateLimiter(), authorize(config.roles.USER), getUvuify);
router.all('/api/v3/user', createRateLimiter(), userEndpoint);
/**
 * Endpoint responsible for handling user-related operations, such as authenticating users through Discord,
 * generating access tokens, and creating new user profiles. The endpoint provides a way for the main website to
 * interact with Discord's authentication system and manage user accounts securely.
 *
 * The ratelimit is applied to control the frequency of requests and mitigate potential abuse. The `userEndpoint`
 * controller manages the underlying logic for user-related actions, including token generation and profile creation.
 *
 * Authentication and token-based authorization are crucial components of this endpoint, ensuring that only authorized
 * users can access and manipulate user-related data and functionalities.
 */

// Random Quote Endpoint
router.get('/api/v3/quote', createRateLimiter(), authorize(config.roles.USER), randomQuotes);
/**
 * Retrieves a random quote or saying from a collection of quotes. Requires authentication and is rate-limited to avoid misuse.
 */

// Random Gifs Endpoints
router.get('/api/v3/kick', createRateLimiter(), authorize(config.roles.USER), randomKick);
router.get('/api/v3/kill', createRateLimiter(), authorize(config.roles.USER), randomKill);
router.get('/api/v3/kiss', createRateLimiter(), authorize(config.roles.USER), randomKissu);
router.get('/api/v3/midfing', createRateLimiter(), authorize(config.roles.USER), randomMidfing);
router.get('/api/v3/nuzzle', createRateLimiter(), authorize(config.roles.USER), randomNuzzle);
router.get('/api/v3/punch', createRateLimiter(), authorize(config.roles.USER), randomPunch);
router.get('/api/v3/shoot', createRateLimiter(), authorize(config.roles.USER), randomShoot);
router.get('/api/v3/sip', createRateLimiter(), authorize(config.roles.USER), randomSip);
router.get('/api/v3/sleepy', createRateLimiter(), authorize(config.roles.USER), randomSleepy);
router.get('/api/v3/smile', createRateLimiter(), authorize(config.roles.USER), randomSmile);
router.get('/api/v3/stab', createRateLimiter(), authorize(config.roles.USER), randomStab);
router.get('/api/v3/stare', createRateLimiter(), authorize(config.roles.USER), randomStare);
router.get('/api/v3/suicide', createRateLimiter(), authorize(config.roles.USER), randomSuicide);
router.get('/api/v3/tease', createRateLimiter(), authorize(config.roles.USER), randomTease);
router.get('/api/v3/wag', createRateLimiter(), authorize(config.roles.USER), randomWag);
router.get('/api/v3/bite', createRateLimiter(), authorize(config.roles.USER), randomBite);
router.get('/api/v3/blush', createRateLimiter(), authorize(config.roles.USER), randomBlush);
router.get('/api/v3/bonk', createRateLimiter(), authorize(config.roles.USER), randomBonk);
router.get('/api/v3/bored', createRateLimiter(), authorize(config.roles.USER), randomBored);
router.get('/api/v3/bully', createRateLimiter(), authorize(config.roles.USER), randomBully);
router.get('/api/v3/bye', createRateLimiter(), authorize(config.roles.USER), randomBye);
router.get('/api/v3/chase', createRateLimiter(), authorize(config.roles.USER), randomChase);
router.get('/api/v3/cheer', createRateLimiter(), authorize(config.roles.USER), randomCheer);
router.get('/api/v3/dab', createRateLimiter(), authorize(config.roles.USER), randomDab);
router.get('/api/v3/die', createRateLimiter(), authorize(config.roles.USER), randomDie);
router.get('/api/v3/disgust', createRateLimiter(), authorize(config.roles.USER), randomDisgust);
router.get('/api/v3/feed', createRateLimiter(), authorize(config.roles.USER), randomFeed);
router.get('/api/v3/hi', createRateLimiter(), authorize(config.roles.USER), randomHi);
router.get('/api/v3/hold', createRateLimiter(), authorize(config.roles.USER), randomHold);
router.get('/api/v3/hug', createRateLimiter(), authorize(config.roles.USER), randomHug);
router.get('/api/v3/Nope', createRateLimiter(), authorize(config.roles.USER), randomNope);
router.get('/api/v3/panic', createRateLimiter(), authorize(config.roles.USER), randomPanic);
router.get('/api/v3/pat', createRateLimiter(), authorize(config.roles.USER), randomPat);
router.get('/api/v3/peck', createRateLimiter(), authorize(config.roles.USER), randomPeck);
router.get('/api/v3/poke', createRateLimiter(), authorize(config.roles.USER), randomPoke);
router.get('/api/v3/punch', createRateLimiter(), authorize(config.roles.USER), randomPunch);
router.get('/api/v3/pout', createRateLimiter(), authorize(config.roles.USER), randomPout);
router.get('/api/v3/run', createRateLimiter(), authorize(config.roles.USER), randomRun);
router.get('/api/v3/sad', createRateLimiter(), authorize(config.roles.USER), randomSad);
router.get('/api/v3/shrug', createRateLimiter(), authorize(config.roles.USER), randomShrug);
router.get('/api/v3/slap', createRateLimiter(), authorize(config.roles.USER), randomSlap);
router.get('/api/v3/smug', createRateLimiter(), authorize(config.roles.USER), randomSmug);
router.get('/api/v3/think', createRateLimiter(), authorize(config.roles.USER), randomThink);
router.get('/api/v3/thumbsup', createRateLimiter(), authorize(config.roles.USER), randomThumbsup);
router.get('/api/v3/tickle', createRateLimiter(), authorize(config.roles.USER), randomTickle);
router.get('/api/v3/triggered', createRateLimiter(), authorize(config.roles.USER), randomTriggered);
router.get('/api/v3/wave', createRateLimiter(), authorize(config.roles.USER), randomWave);
router.get('/api/v3/wink', createRateLimiter(), authorize(config.roles.USER), randomWink);
router.get('/api/v3/yes', createRateLimiter(), authorize(config.roles.USER), randomYes);
router.get('/api/v3/angry', createRateLimiter(), authorize(config.roles.USER), randomAngry);
router.get('/api/v3/cringe', createRateLimiter(), authorize(config.roles.USER), randomCringe);
router.get('/api/v3/cry', createRateLimiter(), authorize(config.roles.USER), randomCry);
router.get('/api/v3/cuddle', createRateLimiter(), authorize(config.roles.USER), randomCuddle);
router.get('/api/v3/dance', createRateLimiter(), authorize(config.roles.USER), randomDance);
router.get('/api/v3/facepalm', createRateLimiter(), authorize(config.roles.USER), randomFacepalm);
router.get('/api/v3/glomp', createRateLimiter(), authorize(config.roles.USER), randomGlomp);
router.get('/api/v3/happy', createRateLimiter(), authorize(config.roles.USER), randomHappy);
router.get('/api/v3/highfive', createRateLimiter(), authorize(config.roles.USER), randomHighfive);
router.get('/api/v3/hug', createRateLimiter(), authorize(config.roles.USER), randomHug);
router.get('/api/v3/laugh', createRateLimiter(), authorize(config.roles.USER), randomLaugh);
router.get('/api/v3/lick', createRateLimiter(), authorize(config.roles.USER), randomLick);
router.get('/api/v3/love', createRateLimiter(), authorize(config.roles.USER), randomLove);
router.get('/api/v3/lurk', createRateLimiter(), authorize(config.roles.USER), randomLurk);
router.get('/api/v3/nervous', createRateLimiter(), authorize(config.roles.USER), randomNervous);
router.get('/api/v3/nom', createRateLimiter(), authorize(config.roles.USER), randomNom);
router.get('/api/v3/baka', createRateLimiter(), authorize(config.roles.USER), randomBaka);

// Note: The comments for the remaining endpoints (utils and GIFs) follow a similar structure of explaining the purpose,
// authentication requirement, and rate-limiting aspect of each endpoint.

export default router;
