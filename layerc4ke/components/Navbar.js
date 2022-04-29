import Link from "next/link";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import frontAuth from "../lib/frontAuth";
import { Nav } from "../styles/Nav.styled";
import { LoginStyles } from "../styles/login.styled";
import {IoMdCloseCircle } from 'react-icons/io'

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export default function Navbar() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      frontAuth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  

  function openModal() {
    const modal = document.querySelector('.modal');
    modal.showModal();
  }

  function closeModal() {
    const modal = document.querySelector('.modal');
    modal.close();
  }


  return (
    <Nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <button className="open-button login-nav" onClick={openModal}>Login</button>
      <dialog className="modal">
        <LoginStyles className="card-container">
          <div className="card login-container">
            <h2>Sign in</h2>
            <button className="close" onClick={closeModal}><IoMdCloseCircle /></button>
            <form onSubmit={handleFormSubmit}>
              <div>
                <input
                  placeholder="Your email"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className="flex-row space-between my-2">
                <input
                  placeholder="Your password"
                  name="password"
                  type="password"
                  id="pwd"
                  onChange={handleChange}
                />
              </div>

              {/* {error ? (
                <div>
                  <p className="error-text">The provided credentials are incorrect</p>
                </div>
              ) : null} */}

              <div className="flex-row flex-end">
                <button type="submit" className="login">Login</button>
              </div>
            </form>
          </div>
        </LoginStyles>
      </dialog>
      <Link href="/cart">
        <a>Cart</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </Nav>
  );
}
