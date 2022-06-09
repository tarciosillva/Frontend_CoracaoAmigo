import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration:none;
        --primaryGreen: #2ED47A;
        --whiteColor: #ffffff;

        --fontSecondaryColor: #90A0B7;
        --borderInputContainerColor: #e6e6e6a6;
        --buttonPrimaryColor:#fff;

        body{
            background-color: #E5E5E5;
        }

        p,h1,h2,h3,h4, th, input, label, textarea{
            font-family: 'Poppins', sans-serif;
        }


        textarea:focus, input:focus, bottom:focus{
            box-shadow: 0 0 0 0;
            outline: none;
        }
    }
`