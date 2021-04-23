import { createGlobalStyle } from "styled-components";

export const GloabalStyle = createGlobalStyle`
    body{
    font-family: 'open sans condensed';
    padding: 20px 40px;

    @media screen and (max-width : 800px){
        padding:10px;
    }
    }

    a{
    text-decoration: none;
    color: black;
    }

    *{
    box-sizing: border-box;
    }
`;
