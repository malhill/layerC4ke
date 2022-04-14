import Head from "next/head";
import Image from 'next/image'
import { useQuery, gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      username
      email
      cart {
        product {
          name
          price
          image
        }
        quantity
      }
    }
  }
`;

export default function Cart() {
  const { data, error, loading } = useQuery(QUERY_ME);

  if (loading) return <p>Loading...</p>
  if (error) return `Error! ${error.message}`;
  console.log(data)

  return (
    <section>
      <Head>
        <title>Cart - Layer C4ke</title>
      </Head>
      <h2>This is {data.me.username}'s Cart</h2>
      <p>Name: {data.me.cart[0].product.name}</p>
      <p>Price: {data.me.cart[0].product.price}</p>
      <p>Quanitity: {data.me.cart[0].quantity}</p>
      <Image src={`/images/${data.me.cart[0].product.image}`} width={400} height={400} />
      
    </section>
  );
}
