import styled from "styled-components";

export const CartTableStyles = styled.section`
    display: flex;
    border: 3px solid red;
    padding-left: 3em;
   

    table {
        border-collapse: collapse;
        flex-grow: 1;
        max-width: 60%;
        border: 3px solid blue;
    }

    tr {
        border-bottom: 1px solid black;
    }

    tr:nth-child(4) {
        border-bottom: none;
    }

    caption {
        color: yellow;
        font-weight: bolder;
        font-size: 1.5em;
        background-color: black;
    }

    thead {
        font-size: 1.2em;
        background-color: green;
        color: white;
    }

    th {
        padding: 20px;
    }

    tbody {
        font-size: 1.1em;
        text-align: center;
        color: pink;
    }

    .icon {
        font-size: 2em;
        color: white;
    }

    .icon-button {
        background-color: red;
        border-radius: 30px;
        padding: .5em;
    }
`;