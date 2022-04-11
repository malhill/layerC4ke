import Head from "next/head";
import { useQuery, gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      username
      email
      cart {
        name
        price
        quantity
      }
    }
  }
`;

export default function Cart() {
  const { data, error, loading } = useQuery(QUERY_ME);

  if (loading) return <p>Loading...</p>
  if (error) return `Error! ${error.message}`;

  return (
    <section>
      <Head>
        <title>Cart - Layer C4ke</title>
      </Head>
      <h2>This is {data.me.username}'s cart</h2>
      <p>{data.me.cart[0].name}</p>
      <p>{data.me.cart[0].price}</p>
      <p>{data.me.cart[0].quantity}</p>
    </section>
  );
}
