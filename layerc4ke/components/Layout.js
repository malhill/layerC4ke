import { ThemeProvider } from 'styled-components'
import Link from 'next/link'
import { Nav } from '../styles/Nav.styled'
import GlobalStyles from '../styles/global'

const theme = {
}

export default function Layout({ children }) {
    return (
        <ThemeProvider theme ={theme}>
        <>  
            <GlobalStyles />
            <Nav>
            <Link href="/index">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/orders">Orders</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/contact">Contact Us</Link>
            </Nav>
        </>
        </ThemeProvider>

    )
};