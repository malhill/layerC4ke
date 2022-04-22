import styled from "styled-components";

export const Grid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    padding: 5em 0;

    .shop-button {
        background: rgb(44,168,215);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
        font-weight: 550;
        border: 4px solid #fa598d;
        box-shadow: 0 0 0px 3px white inset;
    }

    .shop-button:hover {
        transform: scale(1.5)
    }

`;