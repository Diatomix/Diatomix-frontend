/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: 'string' },
  introspection: {
    endpoint: 'https://graphql.k8s.diatomix.xyz/v1/graphql',
    headers: {},
  },
  destination: './src/gqty/index.ts',
  subscriptions: true,
  javascriptOutput: false,
};

module.exports = config;
