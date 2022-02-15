import Link from 'next/link'
import { Nav } from '../styles/Nav.styled'


export default function Navbar() {
    return (
        <Nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="/products"><a>Products</a></Link>
            <Link href="/orders"><a>Orders</a></Link>
            <Link href="/cart"><a>Cart</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
        </Nav>
    )
}