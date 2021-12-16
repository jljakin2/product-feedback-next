import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "http://localhost:3000/admin/api", // TODO: change to env variable
  cache: new InMemoryCache(),
});

export default apolloClient;
