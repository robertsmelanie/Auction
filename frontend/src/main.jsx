
// File: /src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
//below cart
// import { BrowserRouter } from 'react-router-dom';
import './styles/style.css'; // global styles
// import { CartProvider } from './pages/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <CartProvider> */}
        <App /> 
      {/* </CartProvider>
    </BrowserRouter> */}
    
   
    
  </React.StrictMode>
);

//cart added browser router and cart provider