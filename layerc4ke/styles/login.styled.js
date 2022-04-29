import styled from 'styled-components';

export const LoginStyles = styled.section`
    text-align: center;
    font-size: 2em;
    padding: 1em;
    margin-top: .5em;
    background-color: rgb(44,168,215);
    border: 3px solid rgb(250,89,142);
    box-shadow: 0 0 5px 5px inset white;
    border-radius: 10px;
    
    h2 {
        margin: 0;
        color: white;
        text-decoration: underline;
    }

    input {
        border: none;
        font-size: .9em;
        margin-top: 2em;
        padding: .5em 1em;
        border-radius: 40px;
    }

    .login {
        display: inline;
        padding: 1em 1em;
        background-color: white;
        border: none;
        border-radius: 7px;
        font-weight: bolder;
        color: rgb(44,168,215);
        font-size: .8em;
        margin-top: 2em;
        transition: transform 1s;
    }

    .login:hover {
        cursor: pointer;
        transform: scale(1.02)
    }

    .close {
        position: fixed;
        margin-top: -3em;
        margin-left: 8em;
        background-color: inherit;
        border: none;
        color: red;
        font-weight: bolder;
        font-size: 30px;
    }

    .close:hover {
        cursor: pointer;
    }
`;