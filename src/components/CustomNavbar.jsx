import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

function CustomNavbar() {
    const { userData, handleLogout } = useUser();
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
                        <Nav className="me-auto my-auto d-flex flex-column flex-sm-row align-items-center gap-1">
                            <NavLink
                                className={({ isActive }) => (isActive ? 'active' : 'text-white') + ' text-decoration-none my-auto me-1'}
                                to='desafio-pizzeria-mamma-mia/'
                                end
                            >
                                <Button className='btn-dark btn-outline-light custom-btn-nav'>
                                    🍕Home
                                </Button>
                            </NavLink>
                            {!!userData
                                ?
                                <>
                                    <NavLink
                                        className={({ isActive }) => (isActive ? 'active' : 'text-white') + ' text-decoration-none my-auto me-1'}
                                        to='/desafio-pizzeria-mamma-mia/profile'
                                    >
                                        <Button className='btn-dark btn-outline-light custom-btn-nav'>
                                            🔓Profile
                                        </Button>
                                    </NavLink>
                                    <Button
                                        className='btn-dark btn-outline-light custom-btn-nav'
                                        onClick={handleLogout}
                                    >
                                        🔒Logout
                                    </Button>
                                </>
                                :
                                <>
                                    <NavLink
                                        className={({ isActive }) => (isActive ? 'active' : 'text-white') + ' text-decoration-none my-auto me-1'}
                                        to='/desafio-pizzeria-mamma-mia/login'
                                    >
                                        <Button className='btn-dark btn-outline-light custom-btn-nav'>
                                            🔐Login
                                        </Button>
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) => (isActive ? 'active' : 'text-white') + ' text-decoration-none my-auto me-1'}
                                        to='/desafio-pizzeria-mamma-mia/register'
                                    >
                                        <Button className='btn-dark btn-outline-light custom-btn-nav'>
                                            🔐Register
                                        </Button>
                                    </NavLink>
                                </>
                            }
                            <NavLink
                                className={({ isActive }) => (isActive ? 'active' : 'text-info') + ' text-decoration-none my-auto me-1'}
                                to='/desafio-pizzeria-mamma-mia/cart'
                            >
                                <Button
                                    className='btn-dark btn-outline-info custom-btn-nav'
                                >
                                    🛒Total: ${total.toLocaleString('es-CL') + ' '}
                                    {cuenta > 0 && <span className='badge bg-info rounded-pill'>{cuenta}</span>}
                                </Button>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;