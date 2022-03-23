import styled from "styled-components";

export const Card = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-around; */

  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
  justify-content: space-evenly;

  .card-container {
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    border-radius: 8px;
    transition: box-shadow 500ms;
  }

  .card-container:hover {
    box-shadow: 0 0 7px rgb(44,168,215) inset;
    cursor: pointer;
  }

  h2 {
    color: #f55c8c;
  }

  a {
    text-decoration: none;
    color: black;
  }

`;
