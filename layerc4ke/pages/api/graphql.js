import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import resolvers from '../../schema/resolvers';
import typeDefs from '../../schema/typeDefs';
import dbConnect from "../../config/dbconnect";
const { authMiddleware } = require('../../lib/auth');

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  playground: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export default async function handler(req, res) {

  await dbConnect();
  
  await startServer;
  
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};