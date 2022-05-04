import styled from "styled-components";

export const Product = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1em;
    flex-grow: 1;
    max-width: 70%;

    .image-container {
        display: block;
        
    }

    .product-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
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
        padding: 1em;
        width: 50%;
        font-size: 1.2em;
    }

    button {
        padding: 1em 0;
        background-color: rgb(43, 168, 215);
        border: none;
        border-radius: 7px;
        font-weight: bolder;
        color: white;
        opacity: .6;
        transition: opacity .5s;
        font-size: 1.2em;
        max-width: 50%;
    }

    button:hover {
        opacity: 1;
        cursor: pointer;
    }
    
`;