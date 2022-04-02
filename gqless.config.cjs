/**
 * @type {import("@gqless/cli").GQlessConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: 'string' },
  introspection: {
    endpoint: 'https://hasura.k8s.aramid.finance/v1/graphql',
    headers: {},
  },
  destination: './src/gqless/index.ts',
  subscriptions: false,
  javascriptOutput: false,
};

module.exports = config;