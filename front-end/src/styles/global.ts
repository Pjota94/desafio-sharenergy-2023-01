import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
      margin:0;
      padding: 0;
      outline:0;
      box-sizing: border-box;
      font-family: 'Lexend', sans-serif;
    }
    body{
      background-color: #8ACBF4;
    }
    button{
      cursor: pointer;
    }
    
    ul ol li{
      list-style: none;
    }
    
  :root{
    --pink-primary: 255, 87, 127, 1:
  }
`;
