const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
  type Query {
    info: String!
    feed: [Link!]!
  }
  type Link {
    id: ID!
    description: String!
    url: String!
  }`;
//typeDefs defines the GraphQL schema.
//Defining a simple Query type with a field called info. The ! at the end of type String means the field can never be null.

//type Link defines a new Link type that represents the links that can be posted to Hacker News

let links = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL',
  },
];

const resolvers = {
  Query: {
    info: () => `This is a Hackernews clone`,
    feed: () => links,
  },

  Link: {
    id: parent => parent.id,
    description: parent => parent.description,
    url: parent => parent.url,
  },
};

//The resolvers object is the implementation of the schema.

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});
//The resolvers and schema are bundles and passed into the GraphQLServer. This is telling the server what API operations are accepted and how they should be resolved.

server.start(() => console.log('Server is running on http://localhost:4000'));
