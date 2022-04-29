import styled from "styled-components";

export const Cart = styled.section`
    font-weight: bold;
    display: flex;
    justify-content: center;
    padding: 2em 2em;
    border: 5px solid black;
    flex-grow: 1;

    .page-container {
        display: flex;
        flex-grow: 1;
        column-gap: 5em;
        border: 5px solid blue;
    }

    .cart-item-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 1.2em;
        flex-grow: 1;
    }

    .cart-item {
        display: flex;
        border-bottom: 2px solid black;
        column-gap: 2em;
        align-items: center;
        font-size: 1.2em;
        padding: 0 1.5em;
        max-width: 55%;
        min-width: fit-content;
    }

    .icon {
        font-size: 2em;
        color: white;
    }

    .icon-button {
        background-color: rgb(253,88,141);
        border-radius: 30px;
        border: none;
        padding: .5em;
    }

    .col-1, .product-info, form, .price {
        width: 10em;
        flex-grow: 1;
    }

    .checkout-container {
        display: flex;
        align-items: center;
        flex-grow: 1;
    }

    .total {
        display: flex;
        box-shadow: 0 0 3px 3px rgb(250,89,141);
        flex-direction: column;
        align-items: center;
        padding: .7em 1.5em;
    }

    table {
        margin-bottom: .5em;
    }

    caption {
        margin-bottom: .5em;
        text-decoration: underline;
        font-size: 1.2em;
        color: rgb(253,88,141);
    }

    th, td {
        padding: 1em;
    }

    .checkout-form {
        display: flex;
        justify-content: center;
    }

    .checkout-form button {
        padding: 1em 2em;
        background-color: rgb(43, 168, 215);
        border: none;
        border-radius: 7px;
        font-weight: bolder;
        color: white;
        opacity: .6;
        transition: opacity .5s;
    }

    .total h3 {
        text-align: center;
        text-decoration: underline;
    }

    button:hover {
        opacity: 1;
        cursor: pointer;
    }

    
`