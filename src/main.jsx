import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'

import UserProvider from './context/UserContext';
import DataProvider from './context/DataContext';
import CartProvider from './context/CartContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <DataProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </DataProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
