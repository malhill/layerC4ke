import React from "react";
import Head from "next/head";
import Image from 'next/image'
import { useQuery, gql } from "@apollo/client";
import { loadStripe } from '@stripe/stripe-js';

export const QUERY_ME = gql`
  query me {
    me {
      username
      email
      cart {
        product {
          _id
          name
          price
          image
          stripeTestId
        }
        quantity
      }
    }
  }
`;

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function cartPreview() {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  const { data, error, loading } = useQuery(QUERY_ME);

  if (loading) return <p>Loading...</p>
  if (error) return `Error! ${error.message}`;
  
  return (
    <section>
      <Head>
        <title>Cart - Layer C4ke</title>
      </Head>

      {data.me.cart.length > 0 &&
        <div>
          <h2>This is {data.me.username}'s Cart</h2>
          {data.me.cart.map( (cartItem) => (
          <div key={cartItem.product._id}>
            <p>Name: {cartItem.product.name}</p>
            <p>Price: {cartItem.product.price}</p>
            <p>Quanitity: {cartItem.quantity}</p>
            <Image src={`/images/${cartItem.product.image}`} width={200} height={200} />
          </div>
        ))}  
        </div>
      }
  
      {data.me.cart.length === 0 &&
        <h1>Your cart is empty!</h1>
      }
      
      {data.me.cart.length > 0 &&
        <form>
          <section>
            <button type="submit">
              Checkout
            </button>
          </section>
        </form>
      }
    </section>
  );
}