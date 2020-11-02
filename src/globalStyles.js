import { createGlobalStyle, css } from 'styled-components'
import myFontURL from './fonts/joffrey.ttf';

const fontFaces = css`
  @font-face {
    font-family: 'Joffrey';
    src: url(${myFontURL}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Joffrey, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    height: calc(100vh - 40px);
    min-height: calc(100vh - 40px);
  }

  ${fontFaces};
`

export default GlobalStyle;