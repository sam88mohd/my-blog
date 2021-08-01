import { GraphQLClient } from "graphql-request";

export const request = ({ query, variables, preview }) => {
  const endpoint = preview
    ? `https://graphql.datocms.preview`
    : `https://graphql.datocms.com`;

  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  });

  return client.request(query, variables);
};
