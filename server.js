const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => "This is the data response!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen({ port: 9000 })
  .then((serverInfo) => console.log(`Server running at ${serverInfo.url}`));
