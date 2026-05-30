import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true);
    const navigate = useNavigate();

    const handleLogout = () => {
        if (token) {
            setToken(false)
            navigate('/desafio-pizzeria-mamma-mia/login')
        }
    }

    const handleLogin = () => {
        if (!token) {
            setToken(true)
        }
    }

    return (
        <UserContext.Provider value={{ token, handleLogout, handleLogin }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
export default UserProvider;