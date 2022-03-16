import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout"; // Page Component
import { ApolloProvider } from "@apollo/client";
import withData from '../lib/withData';

const theme = {
  colors: {
    header: "",
    body: "#Ffff",
    footer: "",
  },
};

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
}

export default withData(MyApp);
