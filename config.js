/**
 * Configuration module for managing environment-specific settings.
 * @module config
 * @type {Object}
 */

import dotenv from 'dotenv';

/**
 * Loads environment variables from a .env file into process.env.
 * @type {Function}
 */
dotenv.config();

/**
 * Application configuration settings.
 * @type {Object}
 * @property {string} database - Name of the database.
 * @property {number} serverPort - Port for the server.
 * @property {string} serverHost - Host for the server.
 * @property {Object} roles - User roles.
 * @property {string} roles.DEVELOPER - Developer role.
 * @property {string} roles.ADMIN - Admin role.
 * @property {string} roles.MOD - Moderator role.
 * @property {string} roles.DB_MOD - Database Moderator role.
 * @property {string} roles.PREMIUM - Premium role.
 * @property {string} roles.USER - User role.
 */
const config = {
  /**
   * Name of the database.
   * @type {string}
   * @default 'mydatabase'
   */
  database: process.env.MONGODB_URI || 'mydatabase',

  /**
   * Port for the server.
   * @type {number}
   * @default 3000
   */
  serverPort: process.env.PORT || 3000,

  /**
   * Host for the server.
   * @type {string}
   * @default '127.0.0.1'
   */
  serverHost: process.env.HOST || 'http://localhost',

  /**
   * User roles.
   * @type {Object}
   * @property {string} DEVELOPER - Developer role.
   * @property {string} ADMIN - Admin role.
   * @property {string} MOD - Moderator role.
   * @property {string} DB_MOD - Database Moderator role.
   * @property {string} PREMIUM - Premium role.
   * @property {string} USER - User role.
   */
  roles: {
    DEVELOPER: 'developer',
    ADMIN: 'admin',
    MOD: 'moderator',
    DB_MOD: 'database_moderator',
    PREMIUM: 'premium',
    USER: 'user',
  },
};

/**
 * Global configuration object based on the current environment.
 * @global
 * @type {Object}
 */
global.config = config;
