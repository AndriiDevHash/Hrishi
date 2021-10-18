const { GraphQLSchema } = require('graphql');

const { RootQuery } = require('../queries/root.query');

module.exports = new GraphQLSchema({
  query: RootQuery
});
