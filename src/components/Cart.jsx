import React, { useState } from 'react';
// import { pizzaCart } from '../pizzas';

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

    const modificarCantidadPizza = (operacion, id) => {
        let pizzaModificada = cart.find(p => p.id === id);

        if (operacion === 'sumar') {
            pizzaModificada.count = pizzaModificada.count + 1;
        }
        if (operacion === 'restar') {
            pizzaModificada.count = pizzaModificada.count - 1;
        }

        if (pizzaModificada.count <= 0) {
            let renderPizzas = cart.filter(p => p.id !== id);
            setCart(renderPizzas);
            return;
        }

        let renderPizzas = cart.map(p => p.id === id ? pizzaModificada : p);
        setCart(renderPizzas);
    };

    return (
        <>
            <div className='p-4 px-5 mx-2'>
                <h5>Detalles del pedido</h5>
                {cart.length > 0 ? (
                    <>
                        <div className='d-flex flex-column gap-3 py-2'>
                            {cart.map((pizza) => (
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
                                                onClick={() => modificarCantidadPizza('restar', pizza.id)}
                                            >-</button>
                                            <p className='fw-bold p-1 m-0'>{pizza.count}</p>
                                            <button
                                                className='btn btn-outline-primary'
                                                onClick={() => modificarCantidadPizza('sumar', pizza.id)}
                                            >+</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h2 className='my-2'>
                                Total: $
                                {cart.reduce((total, pizza) =>
                                    total + pizza.price * pizza.count, 0).toLocaleString('es-CL')}
                            </h2>
                            <button className='btn btn-dark px3 py-1 my-2'>Pagar</button>
                        </div>
                    </>
                ) : (
                    <div className='text-center py-5'>
                        <h5 className='my-4'>Tu carrito está vacío</h5>
                        <button className='btn btn-outline-primary my-2'>Ver Pizzas🍕</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Cart;