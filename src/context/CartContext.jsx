import { createContext, useContext, useState } from "react";
import { useUser } from './UserContext';
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const { userData } = useUser();
    const [items, setItems] = useState([]);
    const [cartStatus, setCartStatus] = useState({
        cartError: null,
        cartSuccess: null,
    });
    const navigate = useNavigate();

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

    const handleCart = async () => {
        const token = userData.token;

        try {
            const response = await fetch("https://backend-pizzeria-mamma-mia.onrender.com/api/checkouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    cart: items
                }),
            });

            const data = await response.json(); // ✅ await

            if (data.error) {
                setCartStatus({
                    cartError: data.error,
                    cartSuccess: null
                });
            } else {
                setCartStatus({
                    cartError: null,
                    cartSuccess: data.message
                });
                setTimeout(() => {
                    navigate('/desafio-pizzeria-mamma-mia/');
                    clearCart();
                }, 3000);
            }

        } catch (error) {
            setCartStatus({ cartError: "Error al conectar con el servidor", cartSuccess: null });
        }
    };

    const total = items.reduce((sum, ele) => sum + ele.price * ele.cantidad, 0);
    const cuenta = items.reduce((sum, ele) => sum + ele.cantidad, 0);

    return (
        <CartContext.Provider value={{ cartStatus, setCartStatus, items, addItem, updateCantidad, clearCart, handleCart, total, cuenta }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
export default CartProvider;