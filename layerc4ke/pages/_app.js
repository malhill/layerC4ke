// Rendering Header, NavBar, and GlobalStyles inside of Layout.js component
// import Header from '../components/Header'
// import Navbar from '../components/Navbar'
// import GlobalStyles from '../styles/global'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'

const theme = {
  colors: {
    header: '',
    body: '#F55C8C',
    footer: ''
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
