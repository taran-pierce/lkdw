// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import "dotenv/config"

import {
  config,
  graphql,
} from "@keystone-6/core";

// to keep this file tidy, we define our schema in a different file
import { lists, extendGraphqlSchema } from "./schema";

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { withAuth, session } from "./auth";

const {
  S3_BUCKET_NAME: bucketName,
  S3_REGION: region,
  S3_ACCESS_KEY_ID: accessKeyId,
  S3_SECRET_ACCESS_KEY: secretAccessKey,
} = process.env;

export default withAuth(
  config({
    server: {
      cors: {
        // TODO works locally but not when deployed of course
        // origin: "http://localhost:3001",
        origin: [
          "http://localhost:3001",
          process.env.VERCEL_URL,
          process.env.VERCEL_URL_SHORT,
        ],
        credentials: true,
        methods: ["GET","DELETE","PATCH","POST","PUT","OPTIONS"],
        allowedHeaders: [
          "Access-Control-Allow-Origin",
          "Access-Control-Allow-Methods",
          "Access-Control-Allow-Headers",
          "Access-Control-Allow-Credentials",
          "Content-Type",
          // TODO trying to get file upload from frontend working properly
          // "x-apollo-operation-name",
          // "apollo-require-preflight",
        ]
      },
    },
    db: {
      // we"re using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: "postgresql",
      url: process.env.POSTGRES_URL,
      enableLogging: true,
      idField: { kind: "uuid" },
      // useMigrations: true,
      useMigrations: false,
    },
    lists,
    session,
    extendGraphqlSchema,
    storage: {
      // just leaving this for example, it worked fine locally and in production
      // but every time the app was redeployed it would get wiped out since it was local
      // my_local_images: {
      //   kind: 'local',
      //   type: 'image',
      //   generateUrl: path => `${process.env.BASE_URL}/images${path}`,
      //   serverRoute: {
      //     path: '/images',
      //   },
      //   storagePath: 'public/images'
      // },
      my_S3_images: {
        kind: "s3",
        type: "image",
        bucketName,
        region,
        accessKeyId,
        secretAccessKey,
        // proxied: {
        //   baseUrl: '/images/proxy',
        // },
        signed: { expiry: 5000 },
        forcePathStyle: true,
      },
    },
    experimental: {
      generateNextGraphqlAPI: true,
    },
  })
);