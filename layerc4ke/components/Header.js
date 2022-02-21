import { StyledHeader } from '../styles/Header.styled'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './Navbar'

export default function Header() {
    return (
        <div>
            <StyledHeader>
                <Image src={'/images/Layer_Cae_WEbsite_1080x.png'} width={150} height={150} />
                <h1>Layer C4ke</h1>
            </StyledHeader>
            <Nav />
        </div> 
    )
}
