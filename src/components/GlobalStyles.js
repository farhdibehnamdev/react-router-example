import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 62.5%;
        font-family:'Poppins',sans-serif;
        background-color: ${({ theme }) => theme.color.body};
    }


`;
export default GlobalStyles;
