import { createContext, useContext, useEffect, useState } from "react";


export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const apiURL = 'https://backend-pizzeria-mamma-mia.onrender.com/api/pizzas';
                const response = await fetch(apiURL);
                if (!response.ok) throw new Error('Error al obtener las pizzas');
                const data = await response.json();
                setPizzas(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPizzas();
    }, []);

    const getPizzaById = (id) => pizzas.find((pizza) => pizza.id === id) ?? null;

    return (
        <DataContext.Provider value={{ pizzas, error, loading, getPizzaById }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
export default DataProvider;