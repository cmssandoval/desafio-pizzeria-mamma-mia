import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

const Profile = ({ tokenSetter }) => {
  return (
    <div className='container d-flex justify-content-center py-3 m-auto'>
      <Card className='p-2' style={{ width: '18rem' }}>
        <Card.Img
          className='rounded-circle border border-dark'
          variant="top"
          src="favicon.png"
        />
        <Card.Body className='d-flex flex-column gap-4'>
          <Card.Title>Email</Card.Title>
          <input
            className='form-control'
            type="email"
            placeholder='pizza_user@gmail.com'
            disabled
          />
          <div className='text-center'>
            <button
              onClick={() => tokenSetter(false)}
              className='btn btn-danger'
            >
              <Link
                className='text-decoration-none text-white'
                to='/desafio-pizzeria-mamma-mia/login'
              >Cerrar Sesión</Link>
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;