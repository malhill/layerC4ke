import Link from "next/link";
import AuthService from '../lib/frontAuth';
import { Nav } from "../styles/Nav.styled";

export default function Navbar() {
  return (
    <Nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <Link href="/cart">
        <a>Cart</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>

      {AuthService.loggedIn()
        ? <button className="logout" onClick={AuthService.logout}>Logout</button>
        : <Link href="/login"><a>Login</a></Link>
      }

    </Nav>
  );
}
