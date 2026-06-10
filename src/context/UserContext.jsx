import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const [errorState, setErrorState] = useState({
        emptyError: false,
        passwordLengthError: false,
        passwordConfirmationError: false,
        serverError: null,
    });

    const errorStateCleanUp = () => {
        setErrorState({
            emptyError: false,
            passwordLengthError: false,
            passwordConfirmationError: false,
            serverError: null
        })
    }

    const handleRegister = async ({ email, password, passwordConfirmation }) => {
        errorStateCleanUp();

        if (!email.trim() || !password.trim() || !passwordConfirmation.trim()) {
            setErrorState(prev => ({ ...prev, emptyError: true }));
            return;
        } else if (password.length < 6) {
            setErrorState(prev => ({ ...prev, passwordLengthError: true }));
            return;
        } else if (password !== passwordConfirmation) {
            setErrorState(prev => ({ ...prev, passwordConfirmationError: true }));
            return;
        }

        const rawUserData = { email, password };
        const jsonUserData = JSON.stringify(rawUserData);

        const response = await fetch("https://backend-pizzeria-mamma-mia.onrender.com/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonUserData,
        });

        let data = await response.json();
        if (data.error) {
            setErrorState(prev => ({ ...prev, serverError: data.error }));
        } else {
            const user = { email: data.email, token: data.token };
            localStorage.setItem("user", JSON.stringify(user));
            return user;
        }
    }

    const handleLogin = async ({ email, password }) => {
        errorStateCleanUp();
        if (!email.trim() || !password.trim()) {
            setErrorState(prev => ({ ...prev, emptyError: true }));
            return;
        }

        const rawUserData = { email, password };
        const jsonUserData = JSON.stringify(rawUserData);

        const response = await fetch("https://backend-pizzeria-mamma-mia.onrender.com/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonUserData,
        });

        let data = await response.json();        
        if (data.error) {
            setErrorState(prev => ({ ...prev, serverError: data.error }));
        } else {
            const user = { email: data.email, token: data.token };
            localStorage.setItem("user", JSON.stringify(user));
            return user;
        }
    };

    const handleProfile = () => {
        const token = userData.token;
        fetch("https://backend-pizzeria-mamma-mia.onrender.com/api/auth/me", {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
            .then((response) => response.json())
            .then((data) => setUserData(data));
    }

    const handleLogout = () => {
        if (userData) {
            setUserData(null)
            localStorage.removeItem("user")
            navigate('/desafio-pizzeria-mamma-mia/login')
        }
    }

    return (
        <UserContext.Provider value={{ userData, setUserData, errorState, setErrorState, errorStateCleanUp, handleRegister, handleLogin, handleProfile, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
export default UserProvider;