import React from "react";
import Head from "next/head";
import Image from 'next/image'
import { Cart } from "../styles/cart.styled";
import CartTable from "../components/CartTable";
import { useQuery, gql } from "@apollo/client";
import { loadStripe } from '@stripe/stripe-js';
import formatMoney from '../lib/formatMoney';
import {FaTrash} from 'react-icons/fa';
import { cartTotal, getTotal } from "../lib/cartLogic";
import { taxEstimate } from "../lib/cartLogic";

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
        size
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
    <Cart>
      <Head>
        <title>Cart - Layer C4ke</title>
      </Head>

      <div className="page-container">
        {data.me.cart.length > 0 &&
          <CartTable user={data.me} />
        }
    
        {data.me.cart.length === 0 &&
          <h1>Your cart is empty!</h1>
        }
        
        {data.me.cart.length > 0 &&
          <section className="checkout-container">
            <div className="total">
              <table>
                <caption>Summary</caption>
                <tbody>
                  <tr>
                    <th>SubTotal</th>
                    <td>{formatMoney(cartTotal(data.me.cart))}</td>
                  </tr>
                  <tr>
                    <th>Taxes</th>
                    <td>{formatMoney(taxEstimate(cartTotal(data.me.cart)))}</td>
                  </tr>
                  <tr>
                    <th>Shipping</th>
                    <td>Estimated at checkout</td>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <td>{formatMoney(getTotal(cartTotal(data.me.cart), taxEstimate(cartTotal(data.me.cart))))}</td>
                  </tr>
                </tbody>
                
              </table>
              <form className="checkout-form">
                <button type="submit">
                  Checkout
                </button>
              </form>
            </div>
          </section>
        }
      </div>
    </Cart>
  );
}