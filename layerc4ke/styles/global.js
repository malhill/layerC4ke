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
    
    p {
        opacity: 0.6;
        line-height: 1.5;
        font-size: 1.5em;
    }
`;

export default GlobalStyles;
