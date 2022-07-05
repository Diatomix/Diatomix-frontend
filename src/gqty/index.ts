/**
 * GQTY: You can safely modify this file and Query Fetcher based on your needs
 */

import { createReactClient } from "@gqty/react";
import { createSubscriptionsClient } from "@gqty/subscriptions";
import type { QueryFetcher } from "gqty";
import { createClient } from "gqty";
import type {
  GeneratedSchema,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from "./schema.generated";
import { generatedSchema, scalarsEnumsHash } from "./schema.generated";

const headers = {
  'Content-Type': 'application/json',
  'Authorization':
    typeof window !== 'undefined'
      ? localStorage.getItem('auth-token') || ''
      : '',
};

export function setAuthorizationToken(token: string | null | undefined) {
  token = token || '';
  localStorage.setItem('auth-token', token);
  console.log("AUTH TOKEN",token)
  subscriptionsClient.setConnectionParams({headers: headers})
  subscriptionsClient.close()
  return (headers['Authorization'] = token);
}

const queryFetcher: QueryFetcher = async function (
  query,
  variables,
  fetchOptions
) {
  // Modify "/api/graphql" if needed
  const response = await fetch("https://graphql.k8s.diatomix.xyz/v1/graphql", {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: "cors",
    ...fetchOptions,
  });

  const json = await response.json();

  return json;
};

console.log("init headers", headers);
const subscriptionsClient =
  typeof window !== "undefined"
    ? createSubscriptionsClient({
        wsEndpoint: () => {
          // Modify if needed
          const url = new URL("https://graphql.k8s.diatomix.xyz/v1/graphql", window.location.href);
          url.protocol = url.protocol.replace("http", "ws");
          return url.href;
        },
        connectionCallback: () =>{
          console.log("connection to ws up and running");
        },
        connectionInitPayload: ()=>{
          return headers
        },
        headers

      })
    : undefined;
subscriptionsClient.setConnectionParams({headers: headers})

export const client = createClient<
  GeneratedSchema,
  SchemaObjectTypesNames,
  SchemaObjectTypes
>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher,
  subscriptionsClient,

});
const { query, mutation, mutate, subscription, resolved, refetch, track } =
  client;

export { query, mutation, mutate, subscription, resolved, refetch, track };

const {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
  useSubscription,
} = createReactClient<GeneratedSchema>(client, {
  defaults: {
    // Set this flag as "true" if your usage involves React Suspense
    // Keep in mind that you can overwrite it in a per-hook basis
    suspense: false,

    // Set this flag based on your needs
    staleWhileRevalidate: false,
  },
});

export {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
  useSubscription,
};

export * from "./schema.generated";
