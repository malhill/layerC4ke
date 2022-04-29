import Head from "next/head";
import Card from "../components/ProductCard";
import dummy from "../config/seeds";
import { useQuery, gql } from "@apollo/client";
import { CardStyles } from "../styles/ProductCard.styles";

export const ALL_PRODUCTS_QUERY = gql`
  query getProducts {
    getProducts {
      _id
      name
      category
      price
      image
    }
  }
`;

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error.message}`;

  return (
    <CardStyles>
      <Head>
        <title>Products - Layer C4ke</title>
      </Head>
      {/* Should load dummy data if database isn't connected */}
      <Card inventory={!data.getProducts[0] ? dummy : data.getProducts} />
    </CardStyles>
  );
}
