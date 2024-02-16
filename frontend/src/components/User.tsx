import { useQuery } from '@apollo/client';

import GET_CURRENT_USER from '../gql/getCurrentUser.gql';

export function useUser() {
  const { data } = useQuery(GET_CURRENT_USER);

  console.log({
    data,
  });

  return data?.authenticatedItem;
}
