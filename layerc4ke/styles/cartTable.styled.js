import styled from "styled-components";

export const CartTableStyles = styled.section`
    display: flex;
    justify-content: center;
    flex-basis: 65%;
    margin: 0;
    width: 100%;

    p {
        margin: 0;
    }

    table {
        border-collapse: collapse;
        flex-grow: 1;
    }

    thead {
        font-size: 1.2em;
        background-color: rgb(128,203,231);
        color: white;
    }

    th {
        padding: 20px;
    }

    tbody {
        font-size: 1.2em;
        text-align: center;
    }

    td {
        padding: 1em;
    }

    .product-name {
        color: palevioletred;
        font-size: .9em;
    }

    /* .quantity input {
        width: 35%;
        padding: .75em;
        background-color: rgb(128,203,231);
        border: none;
        color: white;
        font-weight: bold;
        text-align: center;
    }

    .quantity input:focus {
        background-color: white;
        box-shadow: 1px 2px 3px 0 rgb(128,203,231);
    } */

    .icon {
        font-size: 1.5em;
        color: white;
    }

    .icon-button {
        background-color: palevioletred;
        border-radius: 30px;
        padding: .5em;
        border: none;
    }
`;