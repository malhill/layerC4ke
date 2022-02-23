import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import client from "../config/apollo-client";
// import 'bootstrap/dist/css/bootstrap.css'

const theme = {
  colors: {
    header: "",
    body: "#Ffff",
    footer: "",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
