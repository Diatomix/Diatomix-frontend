/**
 * @type {import("@gqless/cli").GQlessConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: 'string' },
  introspection: {
    endpoint: 'https://graphql.k8s.diatomix.xyz/v1/graphql',
    headers: {},
  },
  destination: './src/gqless/index.ts',
  subscriptions: true,
  javascriptOutput: false,
};

module.exports = config;
