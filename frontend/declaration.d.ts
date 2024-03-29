declare module '*.scss' {
  const content: Record<string, string>;
  
  export default content;
};

declare module '@keystone-6/auth';
declare module '@keystone-6/core';
declare module '@keystone-6/cloudinary';
declare module '@keystone-6/fields-document';
declare module 'graphql';
declare module '@keystone-6/core/session';
declare module '@keystone-6/core/access';
declare module '@keystone-6/core/fields';
declare module '.keystone/types';
