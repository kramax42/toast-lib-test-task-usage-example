import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
          'Lucida Sans Typewriter', 'DejaVu Sans Mono',
          'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco,
          'Courier New', Courier, monospace;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;
