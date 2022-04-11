import Link from "next/link";
import { Nav } from "../styles/Nav.styled";

// Navbar is being rendered inside of Header.js component

export default function Navbar() {
  return (
    <Nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Link href="/cart">
        <a>Cart</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </Nav>
  );
}
