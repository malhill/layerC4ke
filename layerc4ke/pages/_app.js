import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import { ApolloProvider } from '@apollo/client'
import client from '../config/apollo-client'

const theme = {
  colors: {
    header: '',
    body: '#F55C8C',
    footer: ''
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
