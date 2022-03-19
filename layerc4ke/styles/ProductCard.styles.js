import styled from "styled-components";

export const Card = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  row-gap: 50px;
  column-gap: 10px;

  .card-container {
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    border-radius: 8px;
    transition: box-shadow 500ms;
  }

  .card-container:hover {
    box-shadow: 0 0 10px rgb(44,168,215);
    cursor: pointer;
  }

  h2 {
    color: #f55c8c;
  }

  a {
    text-decoration: none;
    color: black;
  }

  /* img {
    border-radius: 30px;
  } */
`;
