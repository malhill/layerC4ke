import styled from "styled-components";

export const Card = styled.div`
    margin: 10px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    row-gap: 50px;

    .card-container {
        background: orange;
        border-radius: 6px;
        width: 350px;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        color: white;
    }

    img {
        border-radius: 20px;
    }
`;
