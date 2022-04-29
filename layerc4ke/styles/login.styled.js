import styled from 'styled-components';

export const LoginStyles = styled.section`
    flex-grow: 1;
    text-align: center;
    font-size: 2em;
    padding: 1em;
    
    h2 {
        margin: 0;
        color: rgb(253,88,141);
        text-decoration: underline;
    }

    input {
        border: none;
        border-bottom: 1px solid rgb(0,0,0, .4);
        font-size: 1em;
        margin-top: 2em;
        padding: .5em;
    }

    .login {
        display: inline;
        padding: 1em 1em;
        background-color: rgb(43, 168, 215);
        border: none;
        border-radius: 7px;
        font-weight: bolder;
        color: white;
        opacity: .6;
        transition: opacity .5s;
        font-size: .8em;
        margin-top: 2em;
    }

    .login:hover {
        opacity: 1;
        cursor: pointer;
    }

    .close {
        font-size: 30px;
    }

    .close {
        position: fixed;
        margin-top: -3em;
        margin-left: 8em;
        background-color: inherit;
        border: none;
        color: red;
        font-weight: bolder;
    }

    .close:hover {
        cursor: pointer;
    }
`;