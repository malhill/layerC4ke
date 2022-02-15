import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <section>
          <Head>
            <title>Home - Layer C4ke</title>
          </Head>
          <h2>Home Page</h2>
        </section>
      </div>
    </>
  )
};

 