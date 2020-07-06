import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StoreProvider from './providers/StoreProvider';
import 'moment/locale/ko';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root{
    height: 100%;
    font-size: 16px;
    @media screen and (max-width: 600px) {
      font-size: 6px;
    }
    @media screen and (min-width: 768px) {
     font-size: 8px;
  }
    @media screen and (min-width: 992px) {
      font-size: 10px;
    }
    @media only screen and (min-width: 1200px) {
      font-size: 10.5px;
    }
  }

  div{
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  div::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

ReactDOM.render(
  <StoreProvider>
    <GlobalStyle />
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
