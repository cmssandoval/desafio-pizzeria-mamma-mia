import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import RegisterForm from './pages/RegisterForm';
import LoginForm from './pages/LoginForm';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';


function App() {
  const [token, setToken] = useState(false);

  return (
    <div className='d-flex flex-column min-vh-100'>
      <CustomNavbar tokenState={token} />
      <Routes>
        <Route
          path='desafio-pizzeria-mamma-mia/'
          element={<Home />}
        />
        <Route
          path='desafio-pizzeria-mamma-mia/register'
          element={<RegisterForm tokenSetter={setToken} />}
        />
        <Route
          path='desafio-pizzeria-mamma-mia/login'
          element={<LoginForm tokenSetter={setToken} />}
        />
        <Route
          path='/desafio-pizzeria-mamma-mia/cart'
          element={<Cart />}
        />
        <Route
          path='/desafio-pizzeria-mamma-mia/pizza/p001'
          element={<Pizza />}
        />
        <Route
          path='/desafio-pizzeria-mamma-mia/profile'
          element={<Profile tokenSetter={setToken} />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App