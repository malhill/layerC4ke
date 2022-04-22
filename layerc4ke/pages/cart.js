import React from "react";
import Head from "next/head";
import Image from 'next/image'
import { Cart } from "../styles/cart.styled";
import { useQuery, gql } from "@apollo/client";
import { loadStripe } from '@stripe/stripe-js';
import formatMoney from '../lib/formatMoney';
import {FaTrash} from 'react-icons/fa';

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
          <div className="cart-item-container">
            <h2>{data.me.email}'s Cart</h2>
            {data.me.cart.map( (cartItem) => (
            <div key={cartItem.product._id} className='cart-item'>
              <Image src={`/images/${cartItem.product.image}`} width={150} height={150} />
              <div className="col-1">
                <h3 className="product-info">{cartItem.product.name}</h3>
                {cartItem.size &&
                  <p className="product-info">Size: {cartItem.size}</p>
                }
              </div>

              <form> 
                Quantity: <input type="number" min="1" max="10" default={cartItem.quantity}></input>
              </form>
              
              <p className="price">{formatMoney(cartItem.product.price)}</p>
              <button className="icon-button">
                <FaTrash className="icon"/>
              </button>
            
            </div>
          ))} 
          </div>
        }
    
        {data.me.cart.length === 0 &&
          <h1>Your cart is empty!</h1>
        }
        
        {data.me.cart.length > 0 &&
          <section className="checkout-container">
            <div className="total">
              <div>
                <h3>Summary</h3>
                <h4>SubTotal: $$$$</h4>
                <h4>Taxes: $$$$</h4>
                <h4>Shipping: Calculated at checkout</h4>
                <h4>Estimated Total: $$$$</h4>
              </div>
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