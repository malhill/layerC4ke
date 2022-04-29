import { useState } from 'react';
import { useMutation, gql} from '@apollo/client';
import frontAuth from '../lib/frontAuth';
import Link from 'next/link'
import { LoginStyles } from '../styles/login.styled';

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

export default function Login() {
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

  return (
    <LoginStyles>
      <div>
        <h2>Login</h2>
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
          <div>
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

          <div>
            <button type="submit" className='login'>Login</button>
          </div>
        </form>
      </div>
    </LoginStyles>
  );
}