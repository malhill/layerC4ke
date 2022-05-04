import styled from "styled-components";

export const Cart = styled.section`
    display: flex;
    justify-content: center;
    padding: 1em;
    flex: 1;
    max-width: 80%;

    p {
        font-size: 1em;
        opacity: 1;
    }

    .page-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex: 1;
    }

    .checkout-container {
        position: sticky;
        top: 10rem;
        align-self: start;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        flex-basis: 30%;
        margin-top: 2.5em;
    }

    .total {
        display: flex;
        box-shadow: 0 0 3px 3px rgb(250,89,141);
        flex-direction: column;
        align-items: center;
        padding: .7em 1.5em;
        width: 65%;
    }

    .total table {
        border-spacing: 5em 1em;
        margin-bottom: .5em;
    }

    caption {
        margin-bottom: .5em;
        text-decoration: underline;
        font-size: 1.3em;
        font-weight: bold;
        color: rgb(253,88,141);
    }

    .total th, td {
        padding: 1em;
    }

    .checkout-form {
        display: flex;
        justify-content: center;
    }

    .checkout-form button {
        padding: 1em 5em;
        background-color: rgb(43, 168, 215);
        border: none;
        border-radius: 7px;
        font-weight: bolder;
        color: white;
        opacity: .6;
        transition: opacity .5s;
        font-size: 1em;
    }

    button:hover {
        opacity: 1;
        cursor: pointer;
    }
`