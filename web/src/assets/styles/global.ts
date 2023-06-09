import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    font-size: 16px;
    background-color: #f6f5fc;
  };

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
