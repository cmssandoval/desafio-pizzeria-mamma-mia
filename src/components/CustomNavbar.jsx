import { useState } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CustomButton from './CustomButton';

import { useCart } from '../context/CartProvider';

function CustomNavbar({ tokenState }) {
    const { cuenta, total } = useCart();

    return (
        <Navbar
            expand="sm"
            className="bg-custom text-white fixed-top"
            variant='dark'
            data-bs-theme="dark"
        >
            <Container fluid className='ps-2 pe-3 mx-0'>
                <Navbar.Brand className='ms-2'>
                    <h1 className='fs-4'>
                        <Link
                            className='text-decoration-none text-white'
                            to='/desafio-pizzeria-mamma-mia'
                        >
                            Pizzería Mamma Mía!
                        </Link>
                    </h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Container fluid className='d-flex justify-content-end px-0'>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="py-auto ms-0 align-items-center">
                            <CustomButton text='🍕Home' route='/desafio-pizzeria-mamma-mia'/>
                            {tokenState == true
                                ?
                                    <>
                                        <CustomButton
                                            text='🔓Profile'
                                            route='/desafio-pizzeria-mamma-mia/profile'
                                        />
                                        <CustomButton
                                            text='🔒Logout'
                                            route={null}/* '/desafio-pizzeria-mamma-mia/login' 
                                            setToken={setToken}*/
                                        />
                                    </>
                                :
                                    <>
                                        <CustomButton
                                            text='🔐Login'
                                            route='/desafio-pizzeria-mamma-mia/login'
                                        />
                                        <CustomButton
                                            text='🔐Register'
                                            route='/desafio-pizzeria-mamma-mia/register'
                                        />
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    <Button
                        className='btn-dark btn-outline-info'
                    >
                        <Link
                            className='text-decoration-none text-info d-flex align-items-center gap-2'
                            to='/desafio-pizzeria-mamma-mia/cart'
                        >🛒Total: ${total.toLocaleString('es-CL')}
                        {cuenta > 0 && <span className='badge bg-info rounded-pill'>{cuenta}</span>}
                        </Link>
                    </Button>
                </Container>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;