import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  
  ${styledNormalize}

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background-color: #f9fbff;
  }
`;

export default GlobalStyle;
