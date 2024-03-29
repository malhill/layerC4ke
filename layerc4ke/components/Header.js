import { StyledHeader } from "../styles/Header.styled";
import Image from "next/image";
import Nav from "./Navbar";

export default function Header() {
  return (
    <div>
      <StyledHeader>
        <Image src={"/images/Logo.png"} width={150} height={150} />
        <h1>Layer C4ke</h1>
      </StyledHeader>
      <Nav />
    </div>
  );
}
