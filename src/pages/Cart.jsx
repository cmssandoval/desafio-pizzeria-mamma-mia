import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartProvider';

const Cart = () => {
    const { items, updateCantidad, clearCart, total } = useCart();

    return (
        <>
            <div className='p-4 px-5 mt-3 mx-2'>
                <h4>Detalles del pedido</h4>
                {items.length > 0 ? (
                    <>
                        <div className='d-flex flex-column gap-3 py-3'>
                            {items.map((pizza) => (
                                <div key={pizza.id} className='d-flex justify-content-between'>
                                    <div className='d-flex align-items-center gap-1'>
                                        <img className='px-0' src={pizza.img} alt='Imagen Pizza' />
                                        <p className='m-0 fw-bold'>{pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</p>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center gap-3'>
                                        <p className='m-0 fw-bold'>${pizza.price.toLocaleString('es-CL')}</p>
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
                            <div className='d-flex justify-content-between'>
                                <h2 className='my-2'>
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
                            <button className='btn btn-dark px-3 py-1 my-2'>Pagar</button>
                        </div>
                    </>
                ) : (
                    <div className='text-center py-5'>
                        <h5 className='my-4'>Tu carrito está vacío</h5>
                        <button
                            className='btn btn-primary my-2'
                        >
                            <Link
                                to='/desafio-pizzeria-mamma-mia'
                                className='text-decoration-none text-white'
                            >Ver Pizzas🍕</Link>
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;