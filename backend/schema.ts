// Welcome to your schema
//   Schema driven development is Keystone's modus operandi
//
// This file is where we define the lists, fields and hooks for our data.
// If you want to learn more about how lists are configured, please read
// - https://keystonejs.com/docs/config/lists

import { list, graphql } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { cloudinaryImage } from '@keystone-6/cloudinary';

// see https://keystonejs.com/docs/fields/overview for the full list of fields
//   this is a few common fields for an example
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  integer,
  image,
} from '@keystone-6/core/fields';

// the document field is a more complicated field, so it has it's own package
import { document } from '@keystone-6/fields-document';
// if you want to make your own fields, see https://keystonejs.com/docs/guides/custom-fields

// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import type { Lists } from '.keystone/types';
import { GraphQLInputObjectType, GraphQLList } from 'graphql';

export const lists: Lists = {
  User: list({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: allowAll,

    // this is the fields for our User list
    fields: {
      // by adding isRequired, we enforce that every User should have a name
      //   if no name is provided, an error will be displayed
      name: text({ validation: { isRequired: true } }),

      email: text({
        validation: { isRequired: true },
        // by adding isIndexed: 'unique', we're saying that no user can have the same
        // email as another user - this may or may not be a good idea for your project
        isIndexed: 'unique',
      }),

      password: password({ validation: { isRequired: true } }),

      // we can use this field to see what Posts this User has authored
      //   more on that in the Post list below
      // posts: relationship({ ref: 'Post.author', many: true }),

      createdAt: timestamp({
        // this sets the timestamp to Date.now() when the user is first created
        defaultValue: { kind: 'now' },
      }),

      products: relationship({
        ref: 'Product.user',
        many: true,
        // this is some customisations for changing how this will look in the AdminUI
        // ui: {
        //   displayMode: 'cards',
        //   cardFields: ['author'],
        //   inlineEdit: { fields: ['author'] },
        //   linkToItem: true,
        //   inlineConnect: true,
        // },
      }),

      cart: relationship({
        ref: 'CartItem.user',
        many: true,
        ui: {
          createView: { fieldMode: 'hidden' },
          itemView: { fieldMode: 'read' },
        },
      }),

      orders: relationship({
        ref: 'Order.user',
        many: true,
      }),
    },
  }),

  Post: list({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: allowAll,

    // this is the fields for our Post list
    fields: {
      title: text({ validation: { isRequired: true } }),

      // the document field can be used for making rich editable content
      //   you can find out more at https://keystonejs.com/docs/guides/document-fields
      content: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1],
        ],
        links: true,
        dividers: true,
      }),
      status: select({
        type: 'enum',
        options: [
          { label: 'Draft', value: 'draft' },
          { label: 'Published', value: 'published' },
          { label: 'Banned', value: 'banned' },
        ],
      }),
      publishDate: timestamp(),
      author: relationship({ ref: 'Author.posts', many: false }),

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
      tags: relationship({
        // we could have used 'Tag', but then the relationship would only be 1-way
        ref: 'Tag.posts',

        // a Post can have many Tags, not just one
        many: true,

        // this is some customisations for changing how this will look in the AdminUI
        ui: {
          displayMode: 'cards',
          cardFields: ['name'],
          inlineEdit: { fields: ['name'] },
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ['name'] },
        },
      }),
    },
  }),

  // TODO adding Author to set up example and get it working
  Author: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({ isIndexed: 'unique', validation: { isRequired: true } }),
      posts: relationship({ ref: 'Post.author', many: true }),
    },
  }),

  // this last list is our Tag list, it only has a name field for now
  Tag: list({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: allowAll,

    // setting this to isHidden for the user interface prevents this list being visible in the Admin UI
    ui: {
      isHidden: true,
    },

    // this is the fields for our Tag list
    fields: {
      name: text(),
      // this can be helpful to find out all the Posts associated with a Tag
      posts: relationship({ ref: 'Post.tags', many: true }),
      products: relationship({
        ref: 'Product.tags',
        many: true,
        ui: {
          displayMode: 'cards',
          cardFields: ['title'],
          inlineEdit: { fields: ['title'] },
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ['title'] },
        },
      }),
    },
  }),

  // TODO
  Product: list({
    access: allowAll,
    fields: {
      title: text({ validation: { isRequired: true } }),

      image: relationship({
        ref: 'Image.product',
      }),
    
      // TODO use this for product description
      // the document field can be used for making rich editable content
      //   you can find out more at https://keystonejs.com/docs/guides/document-fields
      content: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1],
        ],
        links: true,
        dividers: true,
      }),
      shortDescription: text(),

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
      tags: relationship({
        // we could have used 'Tag', but then the relationship would only be 1-way
        ref: 'Tag.products',

        // a Post can have many Tags, not just one
        many: true,

        // this is some customisations for changing how this will look in the AdminUI
        ui: {
          displayMode: 'cards',
          cardFields: ['name'],
          inlineEdit: { fields: ['name'] },
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ['name'] },
        },
      }),

      price: integer({ validation: { isRequired: true } }),

      user: relationship({
        ref: 'User.products',
      }),
    },
  }),

  Image: list({
    access: allowAll,
    fields: {
      image: image({ storage: 'my_local_images' }),
      altText: text(),
      product: relationship({
        ref: 'Product.image',
      }),
    }
  }),

  CartItem: list({
    access: allowAll,
    fields: {
      quantity: integer({
        defaultValue: 1,
      }),
      user: relationship({
        ref: 'User.cart',
      }),
      product: relationship({
        ref: 'Product',
      }),
    },
    ui: {
      listView: {
        initialColumns: ['user', 'quantity'],
      },
    }
  }),

  Order: list({
    access: allowAll,
    fields: {
      total: integer(),
      items: relationship({
        ref: 'OrderItem.order',
        many: true,
      }),
      user: relationship({
        ref: 'User.orders',
      }),
      charge: integer(),
      date: timestamp(),
    }
  }),

  OrderItem: list({
    access: allowAll,
    fields: {
      quantity: integer({
        defaultValue: 1,
      }),
      product: relationship({
        ref: 'Product',
      }),
      order: relationship({ ref: 'Order.items' }),
    },
    ui: {
      listView: {
        initialColumns: ['user', 'quantity', 'user'],
      },
    },
  }),
};

export const extendGraphqlSchema = graphql.extend(base => {
  const Statistics = graphql.object<{ authorId: string }>()({
    name: 'Statistics',
    fields: {
      draft: graphql.field({
        type: graphql.Int,
        resolve ({ authorId }, args, context: Context) {
        },
      }),
      published: graphql.field({
        type: graphql.Int,
        resolve ({ authorId }, args, context: Context) {
        },
      }),
      latest: graphql.field({
        type: base.object('Post'),
        async resolve ({ authorId }, args, context: Context) {
        },
      }),
    },
  })

  return {
    mutation: {
      publishPost: graphql.field({
        // base.object will return an object type from the existing schema
        // with the name provided or throw if it doesn't exist
        type: base.object('Post'),
        args: { id: graphql.arg({ type: graphql.nonNull(graphql.ID) }) },
        resolve (source, { id }, context: Context) {
          // Note we use `context.db.Post` here as we have a return type
          // of Post, and this API provides results in the correct format.
          // If you accidentally use `context.query.Post` here you can expect problems
          // when accessing the fields in your GraphQL client.
          return context.db.Post.updateOne({
            where: { id },
            data: { status: 'published', publishDate: new Date().toISOString() },
          })
        },
      }),

      checkout: graphql.field({
        type: base.object('OrderItem'),
        args: {
          id: graphql.arg({ type: graphql.String }),
        },
        async resolve (source, { id }, context: Context) {
          // get current user session so we can be sure to attach to correct user
          const sesh = context.session;

          // grab all the cart items for the user
          const allCartItems = await context.query.CartItem.findMany({
            where: {
              user: {
                id: {
                  equals: id
                }
              }
            },
            query: 'id quantity product { id title price }'
          });

          // calculate cart total
          const amount = allCartItems.reduce(function (total: number, cartItem: CartItemCreateInput) {
            return total + cartItem.quantity * cartItem.product?.price;
          }, 0);

          // shape them so they will match while attaching them to the order
          const shapedCartItems = await allCartItems.map((item:any) => {
            // delete the cart item after adding it to the map
            context.db.CartItem.deleteOne({
              where: {
                id: item.id,
              }
            });

            return {
              quantity: item.quantity,
              product: {
                connect: {
                  id: item.product.id
                },
              },
            };
          });

          const now = new Date;

          // if there is no matching cart item then make a new one
          return await context.db.Order.createOne({
            data: {
              date: now.toISOString(),
              charge: amount,
              total: amount,
              items: { create: shapedCartItems },
              user: { connect: { id: sesh.itemId } },
            }
          });
        },
      }),

      addToCart: graphql.field({
        type: base.object('CartItem'),
        args: {
          productId: graphql.arg({ type: graphql.String })
        },
        async resolve (source, { productId }, context: Context) {

          // get current user session so we can be sure to attach to correct user
          const sesh = context.session;

          // when we are adding mulitple of the same thing, we can just adjust the quantity
          // which means it should do a "updateOne" instead of "createOne"
          const allCartItems = await context.db.CartItem.findMany({
            where: {
              user: {
                name: sesh.name,
              },
            },
            resolveFields: 'id quantity'
          })

          // check to see if we already have an item in the cart that matches
          const [existingCartItem] = allCartItems.filter((cartItem:any) => cartItem.productId === productId);

          // if we do then just update the quantity by 1
          if (existingCartItem) {
            return context.db.CartItem.updateOne({
              where: { id: existingCartItem.id },
              data: { quantity: existingCartItem.quantity + 1 }
            });
          }

          // if there is no matching cart item then make a new one
          return context.db.CartItem.createOne({
            data: {
              product: { connect: { id: productId } },
              user: { connect: { id: sesh.itemId } },
            }
          });
        },
      }),

      // only add this mutation for a sudo Context (this is not usable from the API)
      ...(base.schema.extensions.sudo
        ? {
            banPost: graphql.field({
              type: base.object('Post'),
              args: { id: graphql.arg({ type: graphql.nonNull(graphql.ID) }) },
              resolve (source, { id }, context: Context) {
                return context.db.Post.updateOne({
                  where: { id },
                  data: { status: 'banned' },
                })
              },
            }),
          }
        : {}),
    },
    query: {
      // TODO these two queries trigger but never get any information back
      // so gotta troubleshoot those
      recentPosts: graphql.field({
        type: graphql.list(graphql.nonNull(base.object('Post'))),
        args: {
          id: graphql.arg({ type: graphql.nonNull(graphql.ID) }),
          seconds: graphql.arg({ type: graphql.nonNull(graphql.Int), defaultValue: 600 }),
        },
        resolve (source, { id, seconds }, context: Context) {
          const cutoff = new Date(Date.now() - seconds * 1000);

          // Note we use `context.db.Post` here as we have a return type
          // of [Post], and this API provides results in the correct format.
          // If you accidentally use `context.query.Post` here you can expect problems
          // when accessing the fields in your GraphQL client.
          return context.db.Post.findMany({
            where: { author: { id: { equals: id } }, publishDate: { gt: cutoff } },
          })
        },
      }),
      stats: graphql.field({
        type: Statistics,
        args: { id: graphql.arg({ type: graphql.nonNull(graphql.ID) }) },
        resolve (source, { id }) {
          console.log({
            source,
            id,
          });
          return { authorId: id }
        },
      }),
    },
  }
})