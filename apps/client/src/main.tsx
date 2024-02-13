import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App.tsx';
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import store from "./store";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3a3838',
    },
    secondary: {
      main: '#b293d7',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
