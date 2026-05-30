import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

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

import { useUser } from './context/UserContext';

function App() {
  const { token } = useUser();

  return (
    <div className='d-flex flex-column min-vh-100 pt-5'>
      <CustomNavbar />
      <Routes>
        <Route
          path='desafio-pizzeria-mamma-mia/'
          element={<Home />}
        />
        <Route
          path='desafio-pizzeria-mamma-mia/register'
          element={!token ? <RegisterForm /> : <Navigate to='/desafio-pizzeria-mamma-mia' />}
        />
        <Route
          path='desafio-pizzeria-mamma-mia/login'
          element={!token ? <LoginForm /> : <Navigate to='/desafio-pizzeria-mamma-mia' />}
        />
        <Route
          path='desafio-pizzeria-mamma-mia/cart'
          element={<Cart />}
        />
        {/* La funcionalidad de "ver más" en cada pizza
        fue implementada en un commit pasado. Pero de todas
        maneras utiliza useParams para acceder a cada pizza
        según su id */}
        <Route
          path='desafio-pizzeria-mamma-mia/pizza/:id'
          element={<Pizza />}
        />
        <Route
          path='desafio-pizzeria-mamma-mia/profile'
          element={token ? <Profile /> : <Navigate to='/desafio-pizzeria-mamma-mia/login' />}
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