import { getContext } from '@keystone-6/core/context';
import config from '../../../backend/keystone';
// import { Context } from '../../../backend/.keystone/types';
import * as PrismaModule from '.prisma/client';

// Making sure multiple prisma clients are not created during dev hot reloading
export const keystoneContext: any =
  (globalThis as any).keystoneContext || getContext(config, PrismaModule);

if (process.env.NODE_ENV !== 'production') {
    (globalThis as any).keystoneContext = keystoneContext;
}
