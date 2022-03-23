import Head from "next/head";
import Image from "next/image";
import Logo from '../public/images/Logo.png'
import Link from "next/link";
import { Grid } from "../styles/Home.styles";

export default function Home() {
  return (
    <>
      <div>
        <section>
          <Head>
            <title>Home - Layer C4ke</title>
          </Head>
          <h2>Home Page</h2>
          <Grid>
            <Image src={Logo} width="500px" height="500px"></Image>
            <div>
              <h1>Welcome to LAYER C4KE</h1>
              <p>LC SHORTS WILL BE BACK SPRING 2022</p>
              <Link href="/products" className="test"><a className="shop-button">Start Shopping</a></Link>
            </div>
            

          </Grid>
          
        </section>
      </div>
    </>
  );
}
