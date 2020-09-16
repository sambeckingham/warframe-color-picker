import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App"
import * as serviceWorker from './serviceWorker';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {defaultTheme} from "./common/themes";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 14px;
  }
  @media (min-width: 1600px) {
    html {
      font-size: 20px;
    }
  }
  
  * {
    box-sizing: border-box;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();