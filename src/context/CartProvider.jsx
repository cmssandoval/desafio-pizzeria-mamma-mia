import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (pizza) => {
        setItems(prev => {
            const existente = prev.find(ele => ele.id === pizza.id);
            if (existente) {
                return prev.map(ele =>
                    ele.id === pizza.id ? { ...ele, cantidad: ele.cantidad + 1 } : ele
                );
            }
            return [...prev, { ...pizza, cantidad: 1 }];
        });
    };

    const updateCantidad = (id, nCantidad) => {
        setItems(prev =>
            prev
                .map(ele => ele.id === id ? { ...ele, cantidad: ele.cantidad + nCantidad } : ele)
                .filter(ele => ele.cantidad > 0)
        );
    };

    const clearCart = () => setItems([]);

    const total = items.reduce((sum, ele) => sum + ele.price * ele.cantidad, 0);
    const cuenta = items.reduce((sum, ele) => sum + ele.cantidad, 0);

    return (
        <CartContext.Provider value={{ items, addItem, updateCantidad, clearCart, total, cuenta }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
export default CartProvider;