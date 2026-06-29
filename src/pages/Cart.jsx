import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const Cart = () => {
    const { cartStatus, setCartStatus, items, updateCantidad, clearCart, handleCart, total } = useCart();
    const { userData } = useUser();

    useEffect(() => {
        setCartStatus({
            cartError: null,
            cartSuccess: null,
        })
    }, [])

    return (
        <>
            <div className='p-3 p-md-4 px-3 px-md-5 mt-4 mx-1 mx-md-2'>
                <h4>Detalles del pedido</h4>
                {items.length > 0 ? (
                    <>
                        <div className='d-flex flex-column gap-3 py-3'>
                            {items.map((pizza) => (
                                <div key={pizza.id} className='d-flex flex-wrap justify-content-between align-items-center gap-2'>
                                    <div className='d-flex align-items-center flex-grow-1'>
                                        <img
                                            className='px-0 flex-shrink-0 rounded'
                                            style={{ width: "4rem", aspectRatio: "1/1", objectFit: "cover" }}
                                            src={pizza.img}
                                            alt='Imagen Pizza'
                                        />
                                        <p className='m-0 ms-3 fw-bold'>Pizza {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</p>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between gap-2 gap-md-3'>
                                        <p className='m-0 fw-bold text-nowrap'>${pizza.price.toLocaleString('es-CL')}</p>
                                        <div className='d-flex gap-2'>
                                            <button
                                                className='btn btn-outline-danger'
                                                onClick={() => updateCantidad(pizza.id, -1)}
                                            >-</button>
                                            <p className='fw-bold p-1 m-0'>{pizza.cantidad}</p>
                                            <button
                                                className='btn btn-outline-primary'
                                                onClick={() => updateCantidad(pizza.id, +1)}
                                            >+</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className='d-flex flex-wrap justify-content-between align-items-center'>
                                <h2 className='my-2 fs-3'>
                                    Total: $
                                    {total.toLocaleString('es-CL')}
                                </h2>
                                <div>
                                    <button
                                        className='btn btn-outline-danger px-2 m-2 me-0'
                                        onClick={clearCart}
                                    >🗑️</button>
                                </div>
                            </div>
                            <button
                                className={`btn btn-dark px-3 py-1 my-2 ${!userData ? 'disabled' : ''}`}
                                onClick={handleCart}
                            >Pagar</button>
                        </div>
                    </>
                ) : (
                    <div className='text-center py-5'>
                        <h5 className='my-4'>Tu carrito está vacío</h5>
                        <Link
                            to='/desafio-pizzeria-mamma-mia/'
                            className='text-decoration-none text-white'
                        >
                            <Button className='btn-dark my-2'>
                                Ver Pizzas🍕
                            </Button>
                        </Link>
                    </div>
                )}
                {cartStatus.cartSuccess && (
                    <div className='text-center p-5 container'>
                        <p className='bg-success text-white rounded-2 p-2 mx-5'>{cartStatus.cartSuccess} <br />Volviendo al inicio...</p>
                    </div>
                )}
                {cartStatus.cartError && (
                    <div className='text-center p-5 container'>
                        <p className='bg-danger text-white rounded-2 p-2 mx-5'>Error: {cartStatus.cartError}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;