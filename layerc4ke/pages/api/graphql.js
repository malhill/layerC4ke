import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { authMiddleware } from "../../utils/auth";
import resolvers from '../../schema/resolvers';
import typeDefs from '../../schema/typeDefs';
import dbConnect from "../../config/dbconnect";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  context: authMiddleware
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