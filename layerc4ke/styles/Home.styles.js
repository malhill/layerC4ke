import styled from "styled-components";

export const Grid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    gap: 100px;

    .shop-button {
        background: rgb(44,168,215);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
        font-weight: 550;
        border: 2px solid rgb(246,93,143)
    }

    .shop-button:hover {
        box-shadow: 0 0 5px 3px rgb(246,93,143);
    }

    /* .item-1 {
        padding: 50px;
        background-color: orange;
        text-align: center;
        grid-column: 1/5;
        grid-row: 2;
        height: 300px;
    }

    .item-2 {
        padding: 50px;
        background-color: blue;
        text-align: center;
        grid-column: 1/3;
    }

    .item-3 {
        padding: 50px;
        background-color: red;
        text-align: center;
        grid-column: 3/5;
    } */
`;