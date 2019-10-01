const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
  type Query {
    info: String!
  }`;
//typeDefs defines the GraphQL schema.
//Defining a simple Query type with a field called info. The ! at the end of type String means the field can never be null.

const resolvers = {
  Query: {
    info: () => `This is a Hackernews clone`,
  },
};
//The resolvers object is the implementation of the schema.

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});
//The resolvers and schema are bundles and passed into the GraphQLServer. This is telling the server what API operations are accepted and how they should be resolved.

server.start(() => console.log('Server is running on http://localhost:4000'));
