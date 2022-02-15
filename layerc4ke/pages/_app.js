import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'


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
    <>
      <GlobalStyles /> 
      <Header />
      <Navbar />
    </>
    </ThemeProvider>
  )
}

export default MyApp
