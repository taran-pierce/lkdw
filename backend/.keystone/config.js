var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.js
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_config = require("dotenv/config");
var import_core2 = require("@keystone-6/core");

// schema.js
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
var import_fields_document = require("@keystone-6/fields-document");
var import_graphql = require("graphql");
var lists = {
  User: (0, import_core.list)({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: import_access.allowAll,
    // this is the fields for our User list
    fields: {
      // by adding isRequired, we enforce that every User should have a name
      //   if no name is provided, an error will be displayed
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      email: (0, import_fields.text)({
        validation: { isRequired: true },
        // by adding isIndexed: 'unique', we're saying that no user can have the same
        // email as another user - this may or may not be a good idea for your project
        isIndexed: "unique"
      }),
      password: (0, import_fields.password)({ validation: { isRequired: true } }),
      // we can use this field to see what Posts this User has authored
      //   more on that in the Post list below
      // posts: relationship({ ref: 'Post.author', many: true }),
      createdAt: (0, import_fields.timestamp)({
        // this sets the timestamp to Date.now() when the user is first created
        defaultValue: { kind: "now" }
      }),
      products: (0, import_fields.relationship)({
        ref: "Product.user",
        many: true
        // this is some customisations for changing how this will look in the AdminUI
        // ui: {
        //   displayMode: 'cards',
        //   cardFields: ['author'],
        //   inlineEdit: { fields: ['author'] },
        //   linkToItem: true,
        //   inlineConnect: true,
        // },
      }),
      cart: (0, import_fields.relationship)({
        ref: "CartItem.user",
        many: true,
        ui: {
          createView: { fieldMode: "hidden" },
          itemView: { fieldMode: "read" }
        }
      }),
      orders: (0, import_fields.relationship)({
        ref: "Order.user",
        many: true
      }),
      stripeId: (0, import_fields.text)()
    }
  }),
  Post: (0, import_core.list)({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: import_access.allowAll,
    // this is the fields for our Post list
    fields: {
      title: (0, import_fields.text)({ validation: { isRequired: true } }),
      // the document field can be used for making rich editable content
      //   you can find out more at https://keystonejs.com/docs/guides/document-fields
      content: (0, import_fields_document.document)({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1]
        ],
        links: true,
        dividers: true
      }),
      status: (0, import_fields.select)({
        type: "enum",
        options: [
          { label: "Draft", value: "draft" },
          { label: "Published", value: "published" },
          { label: "Banned", value: "banned" }
        ]
      }),
      publishDate: (0, import_fields.timestamp)(),
      author: (0, import_fields.relationship)({ ref: "Author.posts", many: false }),
      // with this field, you can set a User as the author for a Post
      // author: relationship({
      //   // we could have used 'User', but then the relationship would only be 1-way
      //   ref: 'User.posts',
      //   // this is some customisations for changing how this will look in the AdminUI
      //   ui: {
      //     displayMode: 'cards',
      //     cardFields: ['name', 'email'],
      //     inlineEdit: { fields: ['name', 'email'] },
      //     linkToItem: true,
      //     inlineConnect: true,
      //   },
      //   // a Post can only have one author
      //   //   this is the default, but we show it here for verbosity
      //   many: false,
      // }),
      // with this field, you can add some Tags to Posts
      tags: (0, import_fields.relationship)({
        // we could have used 'Tag', but then the relationship would only be 1-way
        ref: "Tag.posts",
        // a Post can have many Tags, not just one
        many: true,
        // this is some customisations for changing how this will look in the AdminUI
        ui: {
          displayMode: "cards",
          cardFields: ["name"],
          inlineEdit: { fields: ["name"] },
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ["name"] }
        }
      })
    }
  }),
  // TODO adding Author to set up example and get it working
  Author: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      email: (0, import_fields.text)({ isIndexed: "unique", validation: { isRequired: true } }),
      posts: (0, import_fields.relationship)({ ref: "Post.author", many: true })
    }
  }),
  // this last list is our Tag list, it only has a name field for now
  Tag: (0, import_core.list)({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: import_access.allowAll,
    // setting this to isHidden for the user interface prevents this list being visible in the Admin UI
    ui: {
      isHidden: true
    },
    // this is the fields for our Tag list
    fields: {
      name: (0, import_fields.text)(),
      // this can be helpful to find out all the Posts associated with a Tag
      posts: (0, import_fields.relationship)({ ref: "Post.tags", many: true }),
      products: (0, import_fields.relationship)({
        ref: "Product.tags",
        many: true,
        ui: {
          displayMode: "cards",
          cardFields: ["title"],
          inlineEdit: { fields: ["title"] },
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ["title"] }
        }
      })
    }
  }),
  // TODO
  Product: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      title: (0, import_fields.text)({ validation: { isRequired: true } }),
      image: (0, import_fields.relationship)({
        ref: "Image.product"
      }),
      // TODO use this for product description
      // the document field can be used for making rich editable content
      //   you can find out more at https://keystonejs.com/docs/guides/document-fields
      content: (0, import_fields_document.document)({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1]
        ],
        links: true,
        dividers: true
      }),
      shortDescription: (0, import_fields.text)(),
      // // with this field, you can set a User as the author for a Post
      // author: relationship({
      //   // we could have used 'User', but then the relationship would only be 1-way
      //   ref: 'User.products',
      //   // this is some customisations for changing how this will look in the AdminUI
      //   ui: {
      //     displayMode: 'cards',
      //     cardFields: ['products'],
      //     inlineEdit: { fields: ['products'] },
      //     linkToItem: true,
      //     inlineConnect: true,
      //   },
      //   // a Post can only have one author
      //   //   this is the default, but we show it here for verbosity
      //   many: false,
      // }),
      // with this field, you can add some Tags to Posts
      tags: (0, import_fields.relationship)({
        // we could have used 'Tag', but then the relationship would only be 1-way
        ref: "Tag.products",
        // a Post can have many Tags, not just one
        many: true,
        // this is some customisations for changing how this will look in the AdminUI
        ui: {
          displayMode: "cards",
          cardFields: ["name"],
          inlineEdit: { fields: ["name"] },
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ["name"] }
        }
      }),
      price: (0, import_fields.integer)({ validation: { isRequired: true } }),
      user: (0, import_fields.relationship)({
        ref: "User.products"
      })
    }
  }),
  Image: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      image: (0, import_fields.image)({ storage: "my_local_images" }),
      altText: (0, import_fields.text)(),
      product: (0, import_fields.relationship)({
        ref: "Product.image"
      })
    }
  }),
  CartItem: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      quantity: (0, import_fields.integer)({
        defaultValue: 1
      }),
      user: (0, import_fields.relationship)({
        ref: "User.cart"
      }),
      product: (0, import_fields.relationship)({
        ref: "Product"
      })
    },
    ui: {
      listView: {
        initialColumns: ["user", "quantity"]
      }
    }
  }),
  Order: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      total: (0, import_fields.integer)(),
      items: (0, import_fields.relationship)({
        ref: "OrderItem.order",
        many: true
      }),
      user: (0, import_fields.relationship)({
        ref: "User.orders"
      }),
      charge: (0, import_fields.integer)(),
      date: (0, import_fields.timestamp)()
    }
  }),
  OrderItem: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      quantity: (0, import_fields.integer)({
        defaultValue: 1
      }),
      product: (0, import_fields.relationship)({
        ref: "Product"
      }),
      order: (0, import_fields.relationship)({ ref: "Order.items" })
    },
    ui: {
      listView: {
        initialColumns: ["user", "quantity", "user"]
      }
    }
  })
};
var extendGraphqlSchema = import_core.graphql.extend((base) => {
  return {
    mutation: {
      publishPost: import_core.graphql.field({
        // base.object will return an object type from the existing schema
        // with the name provided or throw if it doesn't exist
        type: base.object("Post"),
        args: { id: import_core.graphql.arg({ type: import_core.graphql.nonNull(import_core.graphql.ID) }) },
        resolve(source, { id }, context) {
          return context.db.Post.updateOne({
            where: { id },
            data: { status: "published", publishDate: (/* @__PURE__ */ new Date()).toISOString() }
          });
        }
      }),
      checkout: import_core.graphql.field({
        type: base.object("OrderItem"),
        args: {
          id: import_core.graphql.arg({ type: import_core.graphql.String })
        },
        async resolve(source, { id }, context) {
          const sesh = context.session;
          const allCartItems = await context.query.CartItem.findMany({
            where: {
              user: {
                id: {
                  equals: id
                }
              }
            },
            query: "id quantity product { id title price }"
          });
          const amount = allCartItems.reduce(function(total, cartItem) {
            return total + cartItem.quantity * cartItem.product?.price;
          }, 0);
          const shapedCartItems = await allCartItems.map((item) => {
            context.db.CartItem.deleteOne({
              where: {
                id: item.id
              }
            });
            return {
              quantity: item.quantity,
              product: {
                connect: {
                  id: item.product.id
                }
              }
            };
          });
          const now = /* @__PURE__ */ new Date();
          return await context.db.Order.createOne({
            data: {
              date: now.toISOString(),
              charge: amount,
              total: amount,
              items: { create: shapedCartItems },
              user: { connect: { id: sesh.itemId } }
            }
          });
        }
      }),
      addToCart: import_core.graphql.field({
        type: base.object("CartItem"),
        args: {
          productId: import_core.graphql.arg({ type: import_core.graphql.String })
        },
        async resolve(source, { productId }, context) {
          const sesh = context.session;
          const allCartItems = await context.db.CartItem.findMany({
            where: {
              user: {
                name: sesh.name
              }
            },
            resolveFields: "id quantity"
          });
          const [existingCartItem] = allCartItems.filter((cartItem) => cartItem.productId === productId);
          if (existingCartItem) {
            return context.db.CartItem.updateOne({
              where: { id: existingCartItem.id },
              data: { quantity: existingCartItem.quantity + 1 }
            });
          }
          return context.db.CartItem.createOne({
            data: {
              product: { connect: { id: productId } },
              user: { connect: { id: sesh.itemId } }
            }
          });
        }
      }),
      // only add this mutation for a sudo Context (this is not usable from the API)
      ...base.schema.extensions.sudo ? {
        banPost: import_core.graphql.field({
          type: base.object("Post"),
          args: { id: import_core.graphql.arg({ type: import_core.graphql.nonNull(import_core.graphql.ID) }) },
          resolve(source, { id }, context) {
            return context.db.Post.updateOne({
              where: { id },
              data: { status: "banned" }
            });
          }
        })
      } : {}
    },
    query: {
      // TODO these two queries trigger but never get any information back
      // so gotta troubleshoot those
      // recentPosts: graphql.field({
      //   type: graphql.list(graphql.nonNull(base.object('Post'))),
      //   args: {
      //     id: graphql.arg({ type: graphql.nonNull(graphql.ID) }),
      //     seconds: graphql.arg({ type: graphql.nonNull(graphql.Int), defaultValue: 600 }),
      //   },
      //   resolve (source, { id, seconds }, context: any) {
      //     const cutoff = new Date(Date.now() - seconds * 1000);
      //     // Note we use `context.db.Post` here as we have a return type
      //     // of [Post], and this API provides results in the correct format.
      //     // If you accidentally use `context.query.Post` here you can expect problems
      //     // when accessing the fields in your GraphQL client.
      //     return context.db.Post.findMany({
      //       where: { author: { id: { equals: id } }, publishDate: { gt: cutoff } },
      //     })
      //   },
      // }),
      // stats: graphql.field({
      //   type: Statistics,
      //   args: { id: graphql.arg({ type: graphql.nonNull(graphql.ID) }) },
      //   resolve(source, { id }) {
      //     return {
      //       authorId: id,
      //     } as any;
      //   },
      // }),
    }
  };
});

// auth.js
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  // this is a GraphQL query fragment for fetching what data will be attached to a context.session
  //   this can be helpful for when you are writing your access control functions
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  sessionData: "name createdAt id email",
  secretField: "password",
  // WARNING: remove initFirstItem functionality in production
  //   see https://keystonejs.com/docs/config/auth#init-first-item for more
  initFirstItem: {
    // if there are no items in the database, by configuring this field
    //   you are asking the Keystone AdminUI to create a new user
    //   providing inputs for these fields
    fields: ["name", "email", "password"]
    // it uses context.sudo() to do this, which bypasses any access control you might have
    //   you shouldn't use this in production
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret,
  secure: false,
  sameSite: "lax"
});

// keystone.js
var keystone_default = withAuth(
  (0, import_core2.config)({
    server: {
      cors: {
        // TODO works locally but not when deployed of course
        // origin: "http://localhost:3001",
        origin: [
          "http://localhost:3001",
          process.env.VERCEL_URL
        ],
        credentials: true,
        methods: ["GET", "DELETE", "PATCH", "POST", "PUT", "OPTIONS"],
        allowedHeaders: [
          "Access-Control-Allow-Origin",
          "Access-Control-Allow-Methods",
          "Access-Control-Allow-Headers",
          "Access-Control-Allow-Credentials",
          "Content-Type"
          // TODO trying to get file upload from frontend working properly
          // 'x-apollo-operation-name',
          // 'apollo-require-preflight',
        ]
      }
    },
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      // provider: 'sqlite',
      // url: 'file:./keystone.db',
      provider: "postgresql",
      // url: `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:5432`,
      url: process.env.POSTGRES_URL,
      enableLogging: true,
      idField: { kind: "uuid" },
      // useMigrations: true,
      useMigrations: false
    },
    lists,
    session,
    extendGraphqlSchema,
    storage: {
      my_local_images: {
        kind: "local",
        type: "image",
        generateUrl: (path) => `${process.env.BASE_URL}/images${path}`,
        serverRoute: {
          path: "/images"
        },
        storagePath: "public/images"
      }
    },
    experimental: {
      generateNextGraphqlAPI: true
    }
  })
);
//# sourceMappingURL=config.js.map
