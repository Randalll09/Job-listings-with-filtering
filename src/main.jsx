import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={{ ...theme }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
