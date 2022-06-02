import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './providers/cart/cart.provider';
import ItemProvider from './providers/Item/items.provider';
import HiddenProvider from './providers/hidden/hidden.provider';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme
} from "@mui/material/styles";


const theme = createTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#FFFFFF",
      },
    },
  },
});

ReactDOM.render(
  <ItemProvider>
    <CartProvider>
      <HiddenProvider>
        <React.StrictMode>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ThemeProvider>
          </StyledEngineProvider>
        </React.StrictMode>
      </HiddenProvider>
    </CartProvider>
  </ItemProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
