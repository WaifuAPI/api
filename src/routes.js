/**
 * This module defines the main routing logic for the API endpoints of the application. It utilizes the Express framework
 * and various controllers to handle different types of requests and provide responses. Additionally, it incorporates rate
 * limiting and authentication handling for enhanced security and control over incoming requests.
 *
 * The available endpoints include retrieving random facts, generating random waifus, creating random passwords, listing
 * tags, and applying various text transformations like owoify, uwuify, and uvuify. Furthermore, there are endpoints for
 * fetching random quotes and an extensive collection of animated GIFs to express a wide range of emotions and actions.
 *
 * A rate createRateLimiter() has been implemented to manage the frequency of requests and prevent abuse. The `handleAuthentication` middleware
 * is also employed to ensure authentication for relevant endpoints.
 *
 * Please refer to the documentation link provided in the '/api' endpoint for more details about the available endpoints.
 *
 * @module routes
 */

import { Router } from 'express';
import createRateLimiter from './handlers/rateLimit.js';
import handleAuthentication from './handlers/handleAuthentication.js';
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

// Fact Endpoints
router.get('/api/fact', createRateLimiter(), randomFacts);
/**
 * Retrieves a random fact from a predefined collection of facts. Requires authentication and is rate-limited to prevent abuse.
 */

// Waifu Endpoint
router.get('/api/waifu', createRateLimiter(), randomWaifus);
/**
 * Returns a randomly generated waifu character. Requires authentication and is rate-limited to manage the frequency of requests.
 */

// Utils Endpoints
router.get('/api/password', createRateLimiter(), handleAuthentication, randomPasswords);
router.get('/api/alltags', createRateLimiter(), handleAuthentication, getAllTags);
router.get('/api/owoify', createRateLimiter(), handleAuthentication, getOwoify);
router.get('/api/uwuify', createRateLimiter(), handleAuthentication, getUwuify);
router.get('/api/uvuify', createRateLimiter(), handleAuthentication, getUvuify);
router.all('/api/user', createRateLimiter(), userEndpoint);
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
router.get('/api/quote', createRateLimiter(), handleAuthentication, randomQuotes);
/**
 * Retrieves a random quote or saying from a collection of quotes. Requires authentication and is rate-limited to avoid misuse.
 */

// Random Gifs Endpoints
router.get('/api/kick', createRateLimiter(), handleAuthentication, randomKick);
router.get('/api/kill', createRateLimiter(), handleAuthentication, randomKill);
router.get('/api/kiss', createRateLimiter(), handleAuthentication, randomKissu);
router.get('/api/midfing', createRateLimiter(), handleAuthentication, randomMidfing);
router.get('/api/nuzzle', createRateLimiter(), handleAuthentication, randomNuzzle);
router.get('/api/punch', createRateLimiter(), handleAuthentication, randomPunch);
router.get('/api/shoot', createRateLimiter(), handleAuthentication, randomShoot);
router.get('/api/sip', createRateLimiter(), handleAuthentication, randomSip);
router.get('/api/sleepy', createRateLimiter(), handleAuthentication, randomSleepy);
router.get('/api/smile', createRateLimiter(), handleAuthentication, randomSmile);
router.get('/api/stab', createRateLimiter(), handleAuthentication, randomStab);
router.get('/api/stare', createRateLimiter(), handleAuthentication, randomStare);
router.get('/api/suicide', createRateLimiter(), handleAuthentication, randomSuicide);
router.get('/api/tease', createRateLimiter(), handleAuthentication, randomTease);
router.get('/api/wag', createRateLimiter(), handleAuthentication, randomWag);
router.get('/api/bite', createRateLimiter(), handleAuthentication, randomBite);
router.get('/api/blush', createRateLimiter(), handleAuthentication, randomBlush);
router.get('/api/bonk', createRateLimiter(), handleAuthentication, randomBonk);
router.get('/api/bored', createRateLimiter(), handleAuthentication, randomBored);
router.get('/api/bully', createRateLimiter(), handleAuthentication, randomBully);
router.get('/api/bye', createRateLimiter(), handleAuthentication, randomBye);
router.get('/api/chase', createRateLimiter(), handleAuthentication, randomChase);
router.get('/api/cheer', createRateLimiter(), handleAuthentication, randomCheer);
router.get('/api/dab', createRateLimiter(), handleAuthentication, randomDab);
router.get('/api/die', createRateLimiter(), handleAuthentication, randomDie);
router.get('/api/disgust', createRateLimiter(), handleAuthentication, randomDisgust);
router.get('/api/feed', createRateLimiter(), handleAuthentication, randomFeed);
router.get('/api/hi', createRateLimiter(), handleAuthentication, randomHi);
router.get('/api/hold', createRateLimiter(), handleAuthentication, randomHold);
router.get('/api/hug', createRateLimiter(), handleAuthentication, randomHug);
router.get('/api/Nope', createRateLimiter(), handleAuthentication, randomNope);
router.get('/api/panic', createRateLimiter(), handleAuthentication, randomPanic);
router.get('/api/pat', createRateLimiter(), handleAuthentication, randomPat);
router.get('/api/peck', createRateLimiter(), handleAuthentication, randomPeck);
router.get('/api/poke', createRateLimiter(), handleAuthentication, randomPoke);
router.get('/api/punch', createRateLimiter(), handleAuthentication, randomPunch);
router.get('/api/pout', createRateLimiter(), handleAuthentication, randomPout);
router.get('/api/run', createRateLimiter(), handleAuthentication, randomRun);
router.get('/api/sad', createRateLimiter(), handleAuthentication, randomSad);
router.get('/api/shrug', createRateLimiter(), handleAuthentication, randomShrug);
router.get('/api/slap', createRateLimiter(), handleAuthentication, randomSlap);
router.get('/api/smug', createRateLimiter(), handleAuthentication, randomSmug);
router.get('/api/think', createRateLimiter(), handleAuthentication, randomThink);
router.get('/api/thumbsup', createRateLimiter(), handleAuthentication, randomThumbsup);
router.get('/api/tickle', createRateLimiter(), handleAuthentication, randomTickle);
router.get('/api/triggered', createRateLimiter(), handleAuthentication, randomTriggered);
router.get('/api/wave', createRateLimiter(), handleAuthentication, randomWave);
router.get('/api/wink', createRateLimiter(), handleAuthentication, randomWink);
router.get('/api/yes', createRateLimiter(), handleAuthentication, randomYes);
router.get('/api/angry', createRateLimiter(), handleAuthentication, randomAngry);
router.get('/api/cringe', createRateLimiter(), handleAuthentication, randomCringe);
router.get('/api/cry', createRateLimiter(), handleAuthentication, randomCry);
router.get('/api/cuddle', createRateLimiter(), handleAuthentication, randomCuddle);
router.get('/api/dance', createRateLimiter(), handleAuthentication, randomDance);
router.get('/api/facepalm', createRateLimiter(), handleAuthentication, randomFacepalm);
router.get('/api/glomp', createRateLimiter(), handleAuthentication, randomGlomp);
router.get('/api/happy', createRateLimiter(), handleAuthentication, randomHappy);
router.get('/api/highfive', createRateLimiter(), handleAuthentication, randomHighfive);
router.get('/api/hug', createRateLimiter(), handleAuthentication, randomHug);
router.get('/api/laugh', createRateLimiter(), handleAuthentication, randomLaugh);
router.get('/api/lick', createRateLimiter(), handleAuthentication, randomLick);
router.get('/api/love', createRateLimiter(), handleAuthentication, randomLove);
router.get('/api/lurk', createRateLimiter(), handleAuthentication, randomLurk);
router.get('/api/nervous', createRateLimiter(), handleAuthentication, randomNervous);
router.get('/api/nom', createRateLimiter(), handleAuthentication, randomNom);
router.get('/api/baka', createRateLimiter(), handleAuthentication, randomBaka);

// Note: The comments for the remaining endpoints (utils and GIFs) follow a similar structure of explaining the purpose,
// authentication requirement, and rate-limiting aspect of each endpoint.

export default router;
