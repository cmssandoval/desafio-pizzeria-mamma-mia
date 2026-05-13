import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const NotFound = () => {
  return (
    <div className='d-flex flex-column text-start justify-content-center m-auto'>
      <h1>Vaya, has roto nuestra página...</h1>
      <h2 className='fw-bold text-secondary'>ERROR 404</h2>
      <p>Lo sentimos, la página que buscas no existe o no está disponible
        <br />
      </p>
      <Button className='btn-primary my-4 mx-5'>
        <Link
          className='text-white fw-bold text-decoration-none'
          to='/desafio-pizzeria-mamma-mia'
        >Volver al Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;