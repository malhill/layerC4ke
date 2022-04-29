import styled from "styled-components";

export const Product = styled.section`
    display: flex;
    justify-content: center;
    padding: 1em;
    flex-grow: 1;
    max-width: 70%;

    .product-info {
        display: flex;
        flex-direction: column;
        padding: 1em;
    }

    h1 {
        color: rgb(253,88,141);
    }

    p {
        max-width: 40ch;
        line-height: 1.8em;
        font-size: 1.7em;
    }

    .price {
        opacity: 1;
        font-weight: bold;
    }

    select {
        padding: 2em;
        width: 50%;
        font-size: 1.2em;
    }

    button {
        display: block;
        padding: 1em 0;
        background-color: rgb(43, 168, 215);
        border: none;
        border-radius: 7px;
        font-weight: bolder;
        color: white;
        opacity: .6;
        transition: opacity .5s;
        font-size: 1.2em;
        margin-top: 1em;
    }

    button:hover {
        opacity: 1;
        cursor: pointer;
    }
    
`;