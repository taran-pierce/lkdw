// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import 'dotenv/config'

import {
  config,
  graphql,
} from '@keystone-6/core';

// to keep this file tidy, we define our schema in a different file
import { lists, extendGraphqlSchema } from './schema';

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { withAuth, session } from './auth';

export default withAuth(
  config({
    server: {
      cors: {
        // TODO cors issue locally with keystone on different port
        // may have it ironed out now but keeping these here just in case
        // origin: "*",
        origin: "http://localhost:3001",
        credentials: true,
        methods: ['GET','DELETE','PATCH','POST','PUT','OPTIONS'],
        allowedHeaders: [
          'Access-Control-Allow-Origin',
          'Access-Control-Allow-Methods',
          'Access-Control-Allow-Headers',
          'Access-Control-Allow-Credentials',
          'Content-Type',
          // TODO trying to get file upload from frontend working properly
          // 'x-apollo-operation-name',
          // 'apollo-require-preflight',
        ]
      },
    },
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      // provider: 'sqlite',
      // url: 'file:./keystone.db',
      provider: 'postgresql',
      url: `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:5432`,
      enableLogging: true,
      idField: { kind: 'uuid' },
      // useMigrations: true,
      useMigrations: false,
    },
    lists,
    session,
    extendGraphqlSchema,
    storage: {
      my_local_images: {
        kind: 'local',
        type: 'image',
        generateUrl: path => `http://localhost:3000/images${path}`,
        serverRoute: {
          path: '/images',
        },
        storagePath: 'public/images'
      }
    },
  })
);