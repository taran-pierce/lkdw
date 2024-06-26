import { useQuery } from "@apollo/client";

import GET_CURRENT_USER from "../gql/getCurrentUser.gql";

export function useUser() {
  const { data, loading, error, } = useQuery(GET_CURRENT_USER);

  return data?.authenticatedItem;
}
