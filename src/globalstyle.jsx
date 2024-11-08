// src/globalstyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #ffffff; /* 배경색을 흰색으로 설정 */
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
  }

  .page-container {
    display: flex;
    flex-direction: column;
    width: 390px;
    height: 1200px;
    align-items: center;
    /* justify-content: center; */
    background-color: #FFFF;
    border-radius: 12px;
    border: 2px solid #ccc; /* 테두리 추가 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export default GlobalStyle;
