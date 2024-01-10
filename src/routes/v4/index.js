// routes/index.js
import { Router } from 'express';

/**
 * Express Router for handling API routes.
 * @type {Router}
 * @namespace routes
 */
const router = Router();

import factRoutes from './textUtilities/fact.js';

/**
 * @api {use} v4/fact Use Fact Routes
 * @apiDescription Mount the fact-related routes for handling text utilities.
 * @apiName UseFactRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Fact-related routes mounted on the parent router.
 *
 * @function createFactRoutes
 * @description Creates and returns a set of routes for handling text utilities related to facts.
 * @returns {Object} Fact-related routes.
 */
router.use('/fact', factRoutes);

import listTagsRoutes from './textUtilities/listTags.js';

/**
 * @api {use} v4/listTags Use ListTags Routes
 * @apiDescription Mount the listTags-related routes for handling text utilities.
 * @apiName UseListTagsRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes ListTags-related routes mounted on the parent router.
 *
 * @function createListTagsRoutes
 * @description Creates and returns a set of routes for handling text utilities related to listTags.
 * @returns {Object} ListTags-related routes.
 */
router.use('/listTags', listTagsRoutes);

import owoifyRoutes from './textUtilities/owoify.js';

/**
 * @api {use} v4/owoify Use Owoify Routes
 * @apiDescription Mount the owoify-related routes for handling text utilities.
 * @apiName UseOwoifyRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Owoify-related routes mounted on the parent router.
 *
 * @function createOwoifyRoutes
 * @description Creates and returns a set of routes for handling text utilities related to owoify.
 * @returns {Object} Owoify-related routes.
 */
router.use('/owoify', owoifyRoutes);

import passwordRoutes from './textUtilities/password.js';

/**
 * @api {use} v4/password Use Password Routes
 * @apiDescription Mount the password-related routes for handling text utilities.
 * @apiName UsePasswordRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Password-related routes mounted on the parent router.
 *
 * @function createPasswordRoutes
 * @description Creates and returns a set of routes for handling text utilities related to password.
 * @returns {Object} Password-related routes.
 */
router.use('/password', passwordRoutes);

import uvuifyRoutes from './textUtilities/uvuify.js';

/**
 * @api {use} v4/uvuify Use Uvuify Routes
 * @apiDescription Mount the uvuify-related routes for handling text utilities.
 * @apiName UseUvuifyRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Uvuify-related routes mounted on the parent router.
 *
 * @function createUvuifyRoutes
 * @description Creates and returns a set of routes for handling text utilities related to uvuify.
 * @returns {Object} Uvuify-related routes.
 */
router.use('/uvuify', uvuifyRoutes);

import uwuifyRoutes from './textUtilities/uwuify.js';

/**
 * @api {use} v4/uwuify Use Uwuify Routes
 * @apiDescription Mount the uwuify-related routes for handling text utilities.
 * @apiName UseUwuifyRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Uwuify-related routes mounted on the parent router.
 *
 * @function createUwuifyRoutes
 * @description Creates and returns a set of routes for handling text utilities related to uwuify.
 * @returns {Object} Uwuify-related routes.
 */
router.use('/uwuify', uwuifyRoutes);

import waifuRoutes from './images/waifu.js';

/**
 * @api {use} v4/waifu Use Waifu Routes
 * @apiDescription Mount the waifu-related routes for handling images.
 * @apiName UseWaifuRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Uwuify-related routes mounted on the parent router.
 *
 * @function createUwuifyRoutes
 * @description Creates and returns a set of routes for handling images related to waifu.
 * @returns {Object} Waifu-related routes.
 */
router.use('/waifu', waifuRoutes);

import userRoutes from './internal/user.js';

/**
 * @api {use} v4/user Use User Routes
 * @apiDescription Mount the user-related routes for handling images.
 * @apiName UseUserRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes User-related routes mounted on the parent router.
 *
 * @function createUserRoutes
 * @description Creates and returns a set of routes for handling user data.
 * @returns {Object} Waifu-related routes.
 */
router.use('/user', userRoutes);

import angryRoutes from './interactions/angry.js';

/**
 * @api {use} v4/angry Use Angry Routes
 * @apiDescription Mount the angry-related routes for handling interactions.
 * @apiName UseAngryRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Angry-related routes mounted on the parent router.
 *
 * @function createAngryRoutes
 * @description Creates and returns a set of routes for handling interactions related to angry.
 * @returns {Object} Angry-related routes.
 */
router.use('/angry', angryRoutes);

import bakaRoutes from './interactions/baka.js';

/**
 * @api {use} v4/baka Use Baka Routes
 * @apiDescription Mount the baka-related routes for handling interactions.
 * @apiName UseBakaRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Baka-related routes mounted on the parent router.
 *
 * @function createBakaRoutes
 * @description Creates and returns a set of routes for handling interactions related to baka.
 * @returns {Object} Baka-related routes.
 */
router.use('/baka', bakaRoutes);

import biteRoutes from './interactions/bite.js';

/**
 * @api {use} v4/bite Use Bite Routes
 * @apiDescription Mount the bite-related routes for handling interactions.
 * @apiName UseBiteRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Bite-related routes mounted on the parent router.
 *
 * @function createBiteRoutes
 * @description Creates and returns a set of routes for handling interactions related to bite.
 * @returns {Object} Bite-related routes.
 */
router.use('/bite', biteRoutes);

import blushRoutes from './interactions/blush.js';

/**
 * @api {use} v4/blush Use Blush Routes
 * @apiDescription Mount the blush-related routes for handling interactions.
 * @apiName UseBlushRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Blush-related routes mounted on the parent router.
 *
 * @function createBlushRoutes
 * @description Creates and returns a set of routes for handling interactions related to blush.
 * @returns {Object} Blush-related routes.
 */
router.use('/blush', blushRoutes);

import bonkRoutes from './interactions/bonk.js';

/**
 * @api {use} v4/bonk Use Bonk Routes
 * @apiDescription Mount the bonk-related routes for handling interactions.
 * @apiName UseBonkRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Bonk-related routes mounted on the parent router.
 *
 * @function createBonkRoutes
 * @description Creates and returns a set of routes for handling interactions related to bonk.
 * @returns {Object} Bonk-related routes.
 */
router.use('/bonk', bonkRoutes);

import boredRoutes from './interactions/bored.js';

/**
 * @api {use} v4/bored Use Bored Routes
 * @apiDescription Mount the bored-related routes for handling interactions.
 * @apiName UseBoredRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Bored-related routes mounted on the parent router.
 *
 * @function createBoredRoutes
 * @description Creates and returns a set of routes for handling interactions related to bored.
 * @returns {Object} Bored-related routes.
 */
router.use('/bored', boredRoutes);

import bullyRoutes from './interactions/bully.js';

/**
 * @api {use} v4/bully Use Bully Routes
 * @apiDescription Mount the bully-related routes for handling interactions.
 * @apiName UseBullyRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Bully-related routes mounted on the parent router.
 *
 * @function createBullyRoutes
 * @description Creates and returns a set of routes for handling interactions related to bully.
 * @returns {Object} Bully-related routes.
 */
router.use('/bully', bullyRoutes);

import byeRoutes from './interactions/bye.js';

/**
 * @api {use} v4/bye Use Bye Routes
 * @apiDescription Mount the bye-related routes for handling interactions.
 * @apiName UseByeRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Bye-related routes mounted on the parent router.
 *
 * @function createByeRoutes
 * @description Creates and returns a set of routes for handling interactions related to bye.
 * @returns {Object} Bye-related routes.
 */
router.use('/bye', byeRoutes);

import chaseRoutes from './interactions/chase.js';

/**
 * @api {use} v4/chase Use Chase Routes
 * @apiDescription Mount the chase-related routes for handling interactions.
 * @apiName UseChaseRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Chase-related routes mounted on the parent router.
 *
 * @function createChaseRoutes
 * @description Creates and returns a set of routes for handling interactions related to chase.
 * @returns {Object} Chase-related routes.
 */
router.use('/chase', chaseRoutes);

import cheerRoutes from './interactions/cheer.js';

/**
 * @api {use} v4/cheer Use Cheer Routes
 * @apiDescription Mount the cheer-related routes for handling interactions.
 * @apiName UseCheerRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Cheer-related routes mounted on the parent router.
 *
 * @function createCheerRoutes
 * @description Creates and returns a set of routes for handling interactions related to cheer.
 * @returns {Object} Cheer-related routes.
 */
router.use('/cheer', cheerRoutes);

import cringeRoutes from './interactions/cringe.js';

/**
 * @api {use} v4/cringe Use Cringe Routes
 * @apiDescription Mount the cringe-related routes for handling interactions.
 * @apiName UseCringeRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Cringe-related routes mounted on the parent router.
 *
 * @function createCringeRoutes
 * @description Creates and returns a set of routes for handling interactions related to cringe.
 * @returns {Object} Cringe-related routes.
 */
router.use('/cringe', cringeRoutes);

import cryRoutes from './interactions/cry.js';

/**
 * @api {use} v4/cry Use Cry Routes
 * @apiDescription Mount the cry-related routes for handling interactions.
 * @apiName UseCryRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Cry-related routes mounted on the parent router.
 *
 * @function createCryRoutes
 * @description Creates and returns a set of routes for handling interactions related to cry.
 * @returns {Object} Cry-related routes.
 */
router.use('/cry', cryRoutes);

import cuddleRoutes from './interactions/cuddle.js';

/**
 * @api {use} v4/cuddle Use Cuddle Routes
 * @apiDescription Mount the cuddle-related routes for handling interactions.
 * @apiName UseCuddleRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Cuddle-related routes mounted on the parent router.
 *
 * @function createCuddleRoutes
 * @description Creates and returns a set of routes for handling interactions related to cuddle.
 * @returns {Object} Cuddle-related routes.
 */
router.use('/cuddle', cuddleRoutes);

import dabRoutes from './interactions/dab.js';

/**
 * @api {use} v4/dab Use Dab Routes
 * @apiDescription Mount the dab-related routes for handling interactions.
 * @apiName UseDabRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Dab-related routes mounted on the parent router.
 *
 * @function createDabRoutes
 * @description Creates and returns a set of routes for handling interactions related to dab.
 * @returns {Object} Dab-related routes.
 */
router.use('/dab', dabRoutes);

import danceRoutes from './interactions/dance.js';

/**
 * @api {use} v4/dance Use Dance Routes
 * @apiDescription Mount the dance-related routes for handling interactions.
 * @apiName UseDanceRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Dance-related routes mounted on the parent router.
 *
 * @function createDanceRoutes
 * @description Creates and returns a set of routes for handling interactions related to dance.
 * @returns {Object} Dance-related routes.
 */
router.use('/dance', danceRoutes);

import dieRoutes from './interactions/die.js';

/**
 * @api {use} v4/die Use Die Routes
 * @apiDescription Mount the die-related routes for handling interactions.
 * @apiName UseDieRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Die-related routes mounted on the parent router.
 *
 * @function createDieRoutes
 * @description Creates and returns a set of routes for handling interactions related to die.
 * @returns {Object} Die-related routes.
 */
router.use('/die', dieRoutes);

import disgustRoutes from './interactions/disgust.js';

/**
 * @api {use} v4/disgust Use Disgust Routes
 * @apiDescription Mount the disgust-related routes for handling interactions.
 * @apiName UseDisgustRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Disgust-related routes mounted on the parent router.
 *
 * @function createDisgustRoutes
 * @description Creates and returns a set of routes for handling interactions related to disgust.
 * @returns {Object} Disgust-related routes.
 */
router.use('/disgust', disgustRoutes);

import facepalmRoutes from './interactions/facepalm.js';

/**
 * @api {use} v4/facepalm Use Facepalm Routes
 * @apiDescription Mount the facepalm-related routes for handling interactions.
 * @apiName UseFacepalmRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Facepalm-related routes mounted on the parent router.
 *
 * @function createFacepalmRoutes
 * @description Creates and returns a set of routes for handling interactions related to facepalm.
 * @returns {Object} Facepalm-related routes.
 */
router.use('/facepalm', facepalmRoutes);

import feedRoutes from './interactions/feed.js';

/**
 * @api {use} v4/feed Use Feed Routes
 * @apiDescription Mount the feed-related routes for handling interactions.
 * @apiName UseFeedRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Feed-related routes mounted on the parent router.
 *
 * @function createFeedRoutes
 * @description Creates and returns a set of routes for handling interactions related to feed.
 * @returns {Object} Feed-related routes.
 */
router.use('/feed', feedRoutes);

import glompRoutes from './interactions/glomp.js';

/**
 * @api {use} v4/glomp Use Glomp Routes
 * @apiDescription Mount the glomp-related routes for handling interactions.
 * @apiName UseGlompRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Glomp-related routes mounted on the parent router.
 *
 * @function createGlompRoutes
 * @description Creates and returns a set of routes for handling interactions related to glomp.
 * @returns {Object} Glomp-related routes.
 */
router.use('/glomp', glompRoutes);

import happyRoutes from './interactions/happy.js';

/**
 * @api {use} v4/happy Use Happy Routes
 * @apiDescription Mount the happy-related routes for handling interactions.
 * @apiName UseHappyRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Happy-related routes mounted on the parent router.
 *
 * @function createHappyRoutes
 * @description Creates and returns a set of routes for handling interactions related to happy.
 * @returns {Object} Happy-related routes.
 */
router.use('/happy', happyRoutes);

import hiRoutes from './interactions/hi.js';

/**
 * @api {use} v4/hi Use Hi Routes
 * @apiDescription Mount the hi-related routes for handling interactions.
 * @apiName UseHiRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Hi-related routes mounted on the parent router.
 *
 * @function createHiRoutes
 * @description Creates and returns a set of routes for handling interactions related to hi.
 * @returns {Object} Hi-related routes.
 */
router.use('/hi', hiRoutes);

import highfiveRoutes from './interactions/highfive.js';

/**
 * @api {use} v4/highfive Use Highfive Routes
 * @apiDescription Mount the highfive-related routes for handling interactions.
 * @apiName UseHighfiveRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Highfive-related routes mounted on the parent router.
 *
 * @function createHighfiveRoutes
 * @description Creates and returns a set of routes for handling interactions related to highfive.
 * @returns {Object} Highfive-related routes.
 */
router.use('/highfive', highfiveRoutes);

import holdRoutes from './interactions/hold.js';

/**
 * @api {use} v4/hold Use Hold Routes
 * @apiDescription Mount the hold-related routes for handling interactions.
 * @apiName UseHoldRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Hold-related routes mounted on the parent router.
 *
 * @function createHoldRoutes
 * @description Creates and returns a set of routes for handling interactions related to hold.
 * @returns {Object} Hold-related routes.
 */
router.use('/hold', holdRoutes);

import hugRoutes from './interactions/hug.js';

/**
 * @api {use} v4/hug Use Hug Routes
 * @apiDescription Mount the hug-related routes for handling interactions.
 * @apiName UseHugRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Hug-related routes mounted on the parent router.
 *
 * @function createHugRoutes
 * @description Creates and returns a set of routes for handling interactions related to hug.
 * @returns {Object} Hug-related routes.
 */
router.use('/hug', hugRoutes);

import kickRoutes from './interactions/kick.js';

/**
 * @api {use} v4/kick Use Kick Routes
 * @apiDescription Mount the kick-related routes for handling interactions.
 * @apiName UseKickRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Kick-related routes mounted on the parent router.
 *
 * @function createKickRoutes
 * @description Creates and returns a set of routes for handling interactions related to kick.
 * @returns {Object} Kick-related routes.
 */
router.use('/kick', kickRoutes);

import killRoutes from './interactions/kill.js';

/**
 * @api {use} v4/kill Use Kill Routes
 * @apiDescription Mount the kill-related routes for handling interactions.
 * @apiName UseKillRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Kill-related routes mounted on the parent router.
 *
 * @function createKillRoutes
 * @description Creates and returns a set of routes for handling interactions related to kill.
 * @returns {Object} Kill-related routes.
 */
router.use('/kill', killRoutes);

import kissRoutes from './interactions/kiss.js';

/**
 * @api {use} v4/kiss Use Kiss Routes
 * @apiDescription Mount the kiss-related routes for handling interactions.
 * @apiName UseKissRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Kiss-related routes mounted on the parent router.
 *
 * @function createKissRoutes
 * @description Creates and returns a set of routes for handling interactions related to kiss.
 * @returns {Object} Kiss-related routes.
 */
router.use('/kiss', kissRoutes);

import laughRoutes from './interactions/laugh.js';

/**
 * @api {use} v4/laugh Use Laugh Routes
 * @apiDescription Mount the laugh-related routes for handling interactions.
 * @apiName UseLaughRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Laugh-related routes mounted on the parent router.
 *
 * @function createLaughRoutes
 * @description Creates and returns a set of routes for handling interactions related to laugh.
 * @returns {Object} Laugh-related routes.
 */
router.use('/laugh', laughRoutes);

import lickRoutes from './interactions/lick.js';

/**
 * @api {use} v4/lick Use Lick Routes
 * @apiDescription Mount the lick-related routes for handling interactions.
 * @apiName UseLickRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Lick-related routes mounted on the parent router.
 *
 * @function createLickRoutes
 * @description Creates and returns a set of routes for handling interactions related to lick.
 * @returns {Object} Lick-related routes.
 */
router.use('/lick', lickRoutes);

import loveRoutes from './interactions/love.js';

/**
 * @api {use} v4/love Use Love Routes
 * @apiDescription Mount the love-related routes for handling interactions.
 * @apiName UseLoveRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Love-related routes mounted on the parent router.
 *
 * @function createLoveRoutes
 * @description Creates and returns a set of routes for handling interactions related to love.
 * @returns {Object} Love-related routes.
 */
router.use('/love', loveRoutes);

import lurkRoutes from './interactions/lurk.js';

/**
 * @api {use} v4/lurk Use Lurk Routes
 * @apiDescription Mount the lurk-related routes for handling interactions.
 * @apiName UseLurkRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Lurk-related routes mounted on the parent router.
 *
 * @function createLurkRoutes
 * @description Creates and returns a set of routes for handling interactions related to lurk.
 * @returns {Object} Lurk-related routes.
 */
router.use('/lurk', lurkRoutes);

import midfingRoutes from './interactions/midfing.js';

/**
 * @api {use} v4/midfing Use Midfing Routes
 * @apiDescription Mount the midfing-related routes for handling interactions.
 * @apiName UseMidfingRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Midfing-related routes mounted on the parent router.
 *
 * @function createMidfingRoutes
 * @description Creates and returns a set of routes for handling interactions related to midfing.
 * @returns {Object} Midfing-related routes.
 */
router.use('/midfing', midfingRoutes);

import nervousRoutes from './interactions/nervous.js';

/**
 * @api {use} v4/nervous Use Nervous Routes
 * @apiDescription Mount the nervous-related routes for handling interactions.
 * @apiName UseNervousRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Nervous-related routes mounted on the parent router.
 *
 * @function createNervousRoutes
 * @description Creates and returns a set of routes for handling interactions related to nervous.
 * @returns {Object} Nervous-related routes.
 */
router.use('/nervous', nervousRoutes);

import nomRoutes from './interactions/nom.js';

/**
 * @api {use} v4/nom Use Nom Routes
 * @apiDescription Mount the nom-related routes for handling interactions.
 * @apiName UseNomRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Nom-related routes mounted on the parent router.
 *
 * @function createNomRoutes
 * @description Creates and returns a set of routes for handling interactions related to nom.
 * @returns {Object} Nom-related routes.
 */
router.use('/nom', nomRoutes);

import nopeRoutes from './interactions/nope.js';

/**
 * @api {use} v4/nope Use Nope Routes
 * @apiDescription Mount the nope-related routes for handling interactions.
 * @apiName UseNopeRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Nope-related routes mounted on the parent router.
 *
 * @function createNopeRoutes
 * @description Creates and returns a set of routes for handling interactions related to nope.
 * @returns {Object} Nope-related routes.
 */
router.use('/nope', nopeRoutes);

import nuzzleRoutes from './interactions/nuzzle.js';

/**
 * @api {use} v4/nuzzle Use Nuzzle Routes
 * @apiDescription Mount the nuzzle-related routes for handling interactions.
 * @apiName UseNuzzleRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Nuzzle-related routes mounted on the parent router.
 *
 * @function createNuzzleRoutes
 * @description Creates and returns a set of routes for handling interactions related to nuzzle.
 * @returns {Object} Nuzzle-related routes.
 */
router.use('/nuzzle', nuzzleRoutes);

import panicRoutes from './interactions/panic.js';

/**
 * @api {use} v4/panic Use Panic Routes
 * @apiDescription Mount the panic-related routes for handling interactions.
 * @apiName UsePanicRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Panic-related routes mounted on the parent router.
 *
 * @function createPanicRoutes
 * @description Creates and returns a set of routes for handling interactions related to panic.
 * @returns {Object} Panic-related routes.
 */
router.use('/panic', panicRoutes);

import patRoutes from './interactions/pat.js';

/**
 * @api {use} v4/pat Use Pat Routes
 * @apiDescription Mount the pat-related routes for handling interactions.
 * @apiName UsePatRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Pat-related routes mounted on the parent router.
 *
 * @function createPatRoutes
 * @description Creates and returns a set of routes for handling interactions related to pat.
 * @returns {Object} Pat-related routes.
 */
router.use('/pat', patRoutes);

import peckRoutes from './interactions/peck.js';

/**
 * @api {use} v4/peck Use Peck Routes
 * @apiDescription Mount the peck-related routes for handling interactions.
 * @apiName UsePeckRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Peck-related routes mounted on the parent router.
 *
 * @function createPeckRoutes
 * @description Creates and returns a set of routes for handling interactions related to peck.
 * @returns {Object} Peck-related routes.
 */
router.use('/peck', peckRoutes);

import pokeRoutes from './interactions/poke.js';

/**
 * @api {use} v4/poke Use Poke Routes
 * @apiDescription Mount the poke-related routes for handling interactions.
 * @apiName UsePokeRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Poke-related routes mounted on the parent router.
 *
 * @function createPokeRoutes
 * @description Creates and returns a set of routes for handling interactions related to poke.
 * @returns {Object} Poke-related routes.
 */
router.use('/poke', pokeRoutes);

import poutRoutes from './interactions/pout.js';

/**
 * @api {use} v4/pout Use Pout Routes
 * @apiDescription Mount the pout-related routes for handling interactions.
 * @apiName UsePoutRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Pout-related routes mounted on the parent router.
 *
 * @function createPoutRoutes
 * @description Creates and returns a set of routes for handling interactions related to pout.
 * @returns {Object} Pout-related routes.
 */
router.use('/pout', poutRoutes);

import punchRoutes from './interactions/punch.js';

/**
 * @api {use} v4/punch Use Punch Routes
 * @apiDescription Mount the punch-related routes for handling interactions.
 * @apiName UsePunchRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Punch-related routes mounted on the parent router.
 *
 * @function createPunchRoutes
 * @description Creates and returns a set of routes for handling interactions related to punch.
 * @returns {Object} Punch-related routes.
 */
router.use('/punch', punchRoutes);

import runRoutes from './interactions/run.js';

/**
 * @api {use} v4/run Use Run Routes
 * @apiDescription Mount the run-related routes for handling interactions.
 * @apiName UseRunRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Run-related routes mounted on the parent router.
 *
 * @function createRunRoutes
 * @description Creates and returns a set of routes for handling interactions related to run.
 * @returns {Object} Run-related routes.
 */
router.use('/run', runRoutes);

import sadRoutes from './interactions/sad.js';

/**
 * @api {use} v4/sad Use Sad Routes
 * @apiDescription Mount the sad-related routes for handling interactions.
 * @apiName UseSadRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Sad-related routes mounted on the parent router.
 *
 * @function createSadRoutes
 * @description Creates and returns a set of routes for handling interactions related to sad.
 * @returns {Object} Sad-related routes.
 */
router.use('/sad', sadRoutes);

import shootRoutes from './interactions/shoot.js';

/**
 * @api {use} v4/shoot Use Shoot Routes
 * @apiDescription Mount the shoot-related routes for handling interactions.
 * @apiName UseShootRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Shoot-related routes mounted on the parent router.
 *
 * @function createShootRoutes
 * @description Creates and returns a set of routes for handling interactions related to shoot.
 * @returns {Object} Shoot-related routes.
 */
router.use('/shoot', shootRoutes);

import shrugRoutes from './interactions/shrug.js';

/**
 * @api {use} v4/shrug Use Shrug Routes
 * @apiDescription Mount the shrug-related routes for handling interactions.
 * @apiName UseShrugRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Shrug-related routes mounted on the parent router.
 *
 * @function createShrugRoutes
 * @description Creates and returns a set of routes for handling interactions related to shrug.
 * @returns {Object} Shrug-related routes.
 */
router.use('/shrug', shrugRoutes);

import sipRoutes from './interactions/sip.js';

/**
 * @api {use} v4/sip Use Sip Routes
 * @apiDescription Mount the sip-related routes for handling interactions.
 * @apiName UseSipRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Sip-related routes mounted on the parent router.
 *
 * @function createSipRoutes
 * @description Creates and returns a set of routes for handling interactions related to sip.
 * @returns {Object} Sip-related routes.
 */
router.use('/sip', sipRoutes);

import slapRoutes from './interactions/slap.js';

/**
 * @api {use} v4/slap Use Slap Routes
 * @apiDescription Mount the slap-related routes for handling interactions.
 * @apiName UseSlapRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Slap-related routes mounted on the parent router.
 *
 * @function createSlapRoutes
 * @description Creates and returns a set of routes for handling interactions related to slap.
 * @returns {Object} Slap-related routes.
 */
router.use('/slap', slapRoutes);

import sleepyRoutes from './interactions/sleepy.js';

/**
 * @api {use} v4/sleepy Use Sleepy Routes
 * @apiDescription Mount the sleepy-related routes for handling interactions.
 * @apiName UseSleepyRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Sleepy-related routes mounted on the parent router.
 *
 * @function createSleepyRoutes
 * @description Creates and returns a set of routes for handling interactions related to sleepy.
 * @returns {Object} Sleepy-related routes.
 */
router.use('/sleepy', sleepyRoutes);

import smileRoutes from './interactions/smile.js';

/**
 * @api {use} v4/smile Use Smile Routes
 * @apiDescription Mount the smile-related routes for handling interactions.
 * @apiName UseSmileRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Smile-related routes mounted on the parent router.
 *
 * @function createSmileRoutes
 * @description Creates and returns a set of routes for handling interactions related to smile.
 * @returns {Object} Smile-related routes.
 */
router.use('/smile', smileRoutes);

import smugRoutes from './interactions/smug.js';

/**
 * @api {use} v4/smug Use Smug Routes
 * @apiDescription Mount the smug-related routes for handling interactions.
 * @apiName UseSmugRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Smug-related routes mounted on the parent router.
 *
 * @function createSmugRoutes
 * @description Creates and returns a set of routes for handling interactions related to smug.
 * @returns {Object} Smug-related routes.
 */
router.use('/smug', smugRoutes);

import stabRoutes from './interactions/stab.js';

/**
 * @api {use} v4/stab Use Stab Routes
 * @apiDescription Mount the stab-related routes for handling interactions.
 * @apiName UseStabRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Stab-related routes mounted on the parent router.
 *
 * @function createStabRoutes
 * @description Creates and returns a set of routes for handling interactions related to stab.
 * @returns {Object} Stab-related routes.
 */
router.use('/stab', stabRoutes);

import stareRoutes from './interactions/stare.js';

/**
 * @api {use} v4/stare Use Stare Routes
 * @apiDescription Mount the stare-related routes for handling interactions.
 * @apiName UseStareRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Stare-related routes mounted on the parent router.
 *
 * @function createStareRoutes
 * @description Creates and returns a set of routes for handling interactions related to stare.
 * @returns {Object} Stare-related routes.
 */
router.use('/stare', stareRoutes);

import suicideRoutes from './interactions/suicide.js';

/**
 * @api {use} v4/suicide Use Suicide Routes
 * @apiDescription Mount the suicide-related routes for handling interactions.
 * @apiName UseSuicideRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Suicide-related routes mounted on the parent router.
 *
 * @function createSuicideRoutes
 * @description Creates and returns a set of routes for handling interactions related to suicide.
 * @returns {Object} Suicide-related routes.
 */
router.use('/suicide', suicideRoutes);

import teaseRoutes from './interactions/tease.js';

/**
 * @api {use} v4/tease Use Tease Routes
 * @apiDescription Mount the tease-related routes for handling interactions.
 * @apiName UseTeaseRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Tease-related routes mounted on the parent router.
 *
 * @function createTeaseRoutes
 * @description Creates and returns a set of routes for handling interactions related to tease.
 * @returns {Object} Tease-related routes.
 */
router.use('/tease', teaseRoutes);

import thinkRoutes from './interactions/think.js';

/**
 * @api {use} v4/think Use Think Routes
 * @apiDescription Mount the think-related routes for handling interactions.
 * @apiName UseThinkRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Think-related routes mounted on the parent router.
 *
 * @function createThinkRoutes
 * @description Creates and returns a set of routes for handling interactions related to think.
 * @returns {Object} Think-related routes.
 */
router.use('/think', thinkRoutes);

import thumbsupRoutes from './interactions/thumbsup.js';

/**
 * @api {use} v4/thumbsup Use Thumbsup Routes
 * @apiDescription Mount the thumbsup-related routes for handling interactions.
 * @apiName UseThumbsupRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Thumbsup-related routes mounted on the parent router.
 *
 * @function createThumbsupRoutes
 * @description Creates and returns a set of routes for handling interactions related to thumbsup.
 * @returns {Object} Thumbsup-related routes.
 */
router.use('/thumbsup', thumbsupRoutes);

import tickleRoutes from './interactions/tickle.js';

/**
 * @api {use} v4/tickle Use Tickle Routes
 * @apiDescription Mount the tickle-related routes for handling interactions.
 * @apiName UseTickleRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Tickle-related routes mounted on the parent router.
 *
 * @function createTickleRoutes
 * @description Creates and returns a set of routes for handling interactions related to tickle.
 * @returns {Object} Tickle-related routes.
 */
router.use('/tickle', tickleRoutes);

import triggeredRoutes from './interactions/triggered.js';

/**
 * @api {use} v4/triggered Use Triggered Routes
 * @apiDescription Mount the triggered-related routes for handling interactions.
 * @apiName UseTriggeredRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Triggered-related routes mounted on the parent router.
 *
 * @function createTriggeredRoutes
 * @description Creates and returns a set of routes for handling interactions related to triggered.
 * @returns {Object} Triggered-related routes.
 */
router.use('/triggered', triggeredRoutes);

import wagRoutes from './interactions/wag.js';

/**
 * @api {use} v4/wag Use Wag Routes
 * @apiDescription Mount the wag-related routes for handling interactions.
 * @apiName UseWagRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Wag-related routes mounted on the parent router.
 *
 * @function createWagRoutes
 * @description Creates and returns a set of routes for handling interactions related to wag.
 * @returns {Object} Wag-related routes.
 */
router.use('/wag', wagRoutes);

import waveRoutes from './interactions/wave.js';

/**
 * @api {use} v4/wave Use Wave Routes
 * @apiDescription Mount the wave-related routes for handling interactions.
 * @apiName UseWaveRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Wave-related routes mounted on the parent router.
 *
 * @function createWaveRoutes
 * @description Creates and returns a set of routes for handling interactions related to wave.
 * @returns {Object} Wave-related routes.
 */
router.use('/wave', waveRoutes);

import winkRoutes from './interactions/wink.js';

/**
 * @api {use} v4/wink Use Wink Routes
 * @apiDescription Mount the wink-related routes for handling interactions.
 * @apiName UseWinkRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Wink-related routes mounted on the parent router.
 *
 * @function createWinkRoutes
 * @description Creates and returns a set of routes for handling interactions related to wink.
 * @returns {Object} Wink-related routes.
 */
router.use('/wink', winkRoutes);

import yesRoutes from './interactions/yes.js';

/**
 * @api {use} v4/yes Use Yes Routes
 * @apiDescription Mount the yes-related routes for handling interactions.
 * @apiName UseYesRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Yes-related routes mounted on the parent router.
 *
 * @function createYesRoutes
 * @description Creates and returns a set of routes for handling interactions related to yes.
 * @returns {Object} Yes-related routes.
 */
router.use('/yes', yesRoutes);

/**
 * Exporting the router for use in other parts of the application.
 * @exports {Router} router - Express Router instance with mounted routes.
 */
export default router;
