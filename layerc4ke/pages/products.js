import Head from "next/head";
import Card from "../components/ProductCard";
import dummy from "../config/seeds";
import { useQuery, gql } from "@apollo/client";
import inventory from "../config/seeds";

export const ALL_PRODUCTS_QUERY = gql`
    query getProducts {
  getProducts {
    name
    category
    price
    image
  }
}
`;


export default function Products() {
const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);

if (loading) return 'Loading...';
if (error) return `Error! ${error.message}`;

    return (
        <section>
            <Head>
                <title>Products - Layer C4ke</title>
            </Head>
            <h2>Products Page</h2>
            {/* Should load dummy data if database isn't connected */}
            <Card inventory={!data.getProducts[0] ? dummy : data.getProducts} />
        </section>
    )
};