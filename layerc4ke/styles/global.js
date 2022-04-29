import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border box;
    }

    body {
        background: ${({ theme }) => theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }

    .layout {
        margin: 10px;
    }

    h1 {
        font-size: 2em;
    }

    h2 {
        font-size: 1.75em;
    }

    h3 {
        font-size: 1.4em;
    }
    
    p {
        opacity: 0.6;
        line-height: 1.5;
        font-size: 1.25em;
    }

    a {
        font-weight: 700;
    }
`;

export default GlobalStyles;
