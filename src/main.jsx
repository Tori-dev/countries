import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeContextProvider } from './context/ThemeContext';
import { ResultContextProvider } from './context/ResultContext';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResultContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </ResultContextProvider>
  </React.StrictMode>
);
