import { permissionList } from './schemas/fields';
// import { ListAccessArgs } from './types';

export function isSignedIn({ session }) {
  return !!session;
}

const generatedPermissions = Object.fromEntries(
  permissionList.map((permission) => [
    permission,
    function ({ session }) {
      return !!session?.data.role?.[permission];
    },
  ])
);

// // permissions - check for access returns boolean
export const permissions = {
  ...generatedPermissions,
};

// rules can return a boolean or a filter to limit returned items
export const rules = {
  canManageProducts({ session }) {
    if (!isSignedIn({ session })) {
      return false;
    }

    if (permissions.canManageProducts({ session })) {
      return true;
    }

    return { user: { id: session.itemId } };
  },
  canOrder({ session }) {
    // this one on each will make sure to return false
    // when not signed in instead of line 46 throwing an ISE
    if (!isSignedIn({ session })) {
      return false;
    }

    if (permissions.canManageCart({ session })) {
      return true;
    }

    return { user: { id: session.itemId } };
  },
  canManageOrderItems({ session }) {
    if (!isSignedIn({ session })) {
      return false;
    }

    if (permissions.canManageCart({ session })) {
      return true;
    }

    return { order: { user: { id: session.itemId } } };
  },
  canReadProducts({ session }) {
    // if they can manage products
    // let them sell all products, reguardless of availiabity
    if (permissions.canManageProducts({ session })) {
      return true;
    }

    // otherwise only show products that are available
    return { status: 'AVAILABLE' };
  },
  canManageUsers({ session, req }) {
    if (!isSignedIn({ session })) {
      return false;
    }

    if (permissions.canManageUsers({ session })) {
      return true;
    }

    // TODO why is this throwing an error now when not logged in as admin?
    // says it HAS to be a boolean now and the object is not allowed
    return { id: session.itemId };
  },
};
