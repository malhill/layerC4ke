import styled from "styled-components";

export const CardStyles = styled.section`
  flex-grow: 1;
  padding: 2em 0;
  max-width: 80%;

  .product-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em;
  }

  .card-container {
    display: block;
    text-align: center;
    padding: .5em; 
    row-gap: .5em;
    border-radius: 5px;
    transition: box-shadow 500ms;
  }

  .card-container:hover {
    box-shadow: 0 0 12px 0px rgb(44,168,215);
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: rgb(253,88,141);
    font-size: 1.5em;
    font-weight: 550;
  }

  p {
    color: rgb(0,0,0);
    font-weight: bold;
    opacity: 1;
    margin: 0;
  }

  @media only screen and (max-width: 1600px) {
    max-width: 90%;
    .product-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media only screen and (max-width: 900px) {

    .product-container {
      grid-template-columns: 1fr;
    }
  }
`;
