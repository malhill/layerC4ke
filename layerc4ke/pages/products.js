import Head from "next/head";
import Card from "../components/ProductCard";
import inventory from "../config/seeds";


export default function Products() {
    return (
        <section>
            <Head>
                <title>Products - Layer C4ke</title>
            </Head>
            <h2>Products Page</h2>
            <Card inventory={inventory} />
        </section>
    )
};