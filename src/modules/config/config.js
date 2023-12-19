// config.js
import dotenv from 'dotenv';
dotenv.config();

const config = {
  development: {
    database: {
      host: process.env.DB_HOST || 'localhost',
      username: process.env.DB_USERNAME || 'user',
      password: process.env.DB_PASSWORD || 'password',
      databaseName: process.env.DB_NAME || 'mydatabase',
    },
    server: {
      port: process.env.PORT || 3000,
      host: process.env.HOST || '127.0.0.1',
    },
    roles: {
      DEVELOPER: 'developer',
      ADMIN: 'admin',
      MOD: 'moderator',
      DB_MOD: 'database_moderator',
      PREMIUM: 'premium',
      USER: 'user',
    },
  },
  production: {
    database: {
      host: process.env.DB_HOST || 'production-host',
      username: process.env.DB_USERNAME || 'production-user',
      password: process.env.DB_PASSWORD || 'production-password',
      databaseName: process.env.DB_NAME || 'production-database',
    },
    server: {
      port: process.env.PORT || 80,
      host: process.env.HOST || 'production-hostname',
    },
    roles: {
      DEVELOPER: 'developer',
      ADMIN: 'admin',
      MOD: 'moderator',
      DB_MOD: 'database_moderator',
      PREMIUM: 'premium',
      USER: 'user',
    },
  },
};

const environment = process.env.NODE_ENV || 'development';

global.config = config[environment];
