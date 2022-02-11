import Link from 'next/link'
import Header from './Header'
import { Nav } from '../styles/Nav.styled'

export default function Layout({ children }) {
    return (
        <>  
            <Header />
            <Nav>
            <Link href="/index">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/orders">Orders</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/contact">Contact Us</Link>
            </Nav>
            <h1>Hello from LayoutJS ^</h1>
        </>
    )
};