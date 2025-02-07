import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: globersemibold, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #fff;
        line-height: 1.4;
    }
    
    a{
        text-decoration: none;
    }
    p{
        font-family: "globerbook", sans-serif;
    }
    ul{
        list-style: none;
    }
    button{
        border: none;
        background-color: unset;
    }
    h1,h2{
        font-family: "Glober Bold", sans-serif;
        color: #fff;
    }
`;
