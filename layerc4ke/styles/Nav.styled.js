import styled from "styled-components";

export const Nav = styled.div`
  background: #ebfbff;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;

  a {
    text-decoration: none !important;
    color: #f55c8c;
    font-weight: 700;
    padding: 7px;
    border-radius: 7px;
    transition: background-color 300ms;
  }

  a:hover {
    background-color: #f9d5e1;
  }
`;
