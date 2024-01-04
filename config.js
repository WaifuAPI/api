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
 * @property {string} databaseHost - Database host address.
 * @property {string} databaseUsername - Database username.
 * @property {string} databasePassword - Database password.
 * @property {string} databaseName - Name of the database.
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
   * Database host address.
   * @type {string}
   * @default 'localhost'
   */
  databaseHost: process.env.DB_HOST || 'localhost',

  /**
   * Database username.
   * @type {string}
   * @default 'user'
   */
  databaseUsername: process.env.DB_USERNAME || 'user',

  /**
   * Database password.
   * @type {string}
   * @default 'password'
   */
  databasePassword: process.env.DB_PASSWORD || 'password',

  /**
   * Name of the database.
   * @type {string}
   * @default 'mydatabase'
   */
  databaseName: process.env.MONGODB_URI || 'mydatabase',

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
 * Determines the current environment based on the NODE_ENV environment variable.
 * Defaults to 'development' if NODE_ENV is not set.
 * @type {string}
 */
const environment = process.env.NODE_ENV || 'development';

/**
 * Global configuration object based on the current environment.
 * @global
 * @type {Object}
 */
global.config = config;
