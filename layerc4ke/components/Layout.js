import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <>
            <h1>Hello from Layout.js</h1>
            <Link href="/products">Products</Link>
            <Link href="/orders">Orders</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/contact">Contact Us</Link>
        </>
    )
};