import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

  }
  a{
    color: inherit;
    text-decoration: none;

  }
  button{
    cursor: pointer;
    background: none;
    border:none;
  }
  li{
    list-style: none;
  }
  body{
    font-family: 'Roboto Condensed', sans-serif;
  }
`;

export default GlobalStyles;
