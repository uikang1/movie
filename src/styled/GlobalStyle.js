import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  /* other styles */
  body {
    line-height: 1.6;
    font-size: 15px;
    font-family: 'Noto Sans KR', sans-serif;
}
a {
    line-height: 1.6;
    font-size: 15px;
    text-decoration: none;
    color: #333;
}
li {
    list-style: none;
}
table {
    width: 100%;
  
}
img {
    vertical-align: top;
}

`;

export default GlobalStyle;
