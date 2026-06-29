import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useUser } from '../context/UserContext';

export default function RegisterForm() {
    const { setErrorState, errorState, setUserData, handleRegister } = useUser();
    const [showSuccess, setShowSuccess] = useState(false);

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await handleRegister({ email, password, passwordConfirmation });
        if (success) {
            setShowSuccess(true);
            setTimeout(() => {
                setUserData(success)
                navigate('/desafio-pizzeria-mamma-mia/');
            }, 1000);
        }
    };

    useEffect(() => {
        setErrorState({
            emptyError: false,
            passwordLengthError: false,
            passwordConfirmationError: false,
            serverError: null,
        });
    }, [])

    return (
        <form className='container text-center my-4 py-4' onSubmit={(e) => { handleSubmit(e) }}>
            <div className='row flex-column align-items-center justify-content-center my-2'>
                <h2 className='fw-bold m-0 pb-3'>Registro</h2>
                <div className='form-group col-9 col-sm-8 col-md-6 py-2 px-5'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id='email'
                        placeholder='ejemplo@gmail.com'
                        className='mt-2 form-control'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <div className='form-group col-9 col-sm-8 col-md-6 py-2 px-5'>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id='password'
                        placeholder='Contraseña'
                        className='mt-2 form-control'
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>
                <div className='form-group col-9 col-sm-8 col-md-6 py-2 px-5'>
                    <label htmlFor="passwordConfirmation">Confirme su contraseña</label>
                    <input
                        type="password"
                        id='passwordConfirmation'
                        placeholder='Contraseña'
                        className='mt-2 form-control'
                        value={passwordConfirmation}
                        onChange={(e) => { setPasswordConfirmation(e.target.value) }}
                    />
                </div>
                <div className='form-group col-9 col-sm-8 col-md-6 py-3 px-5'>
                    {errorState.emptyError && <p className='bg-danger text-white rounded-2 p-2'>Debe llenar todos los campos</p>}
                    {errorState.passwordLengthError && <p className='bg-danger text-white rounded-2 p-2'>La contraseña debe tener como mínimo 6 caracteres</p>}
                    {errorState.passwordConfirmationError && <p className='bg-danger text-white rounded-2 p-2'>Las contraseñas deben ser iguales</p>}
                    {errorState.serverError && <p className='bg-danger text-white rounded-2 p-2'>Error del servidor:<br />{errorState.serverError}</p>}
                    {showSuccess && <p className='bg-success text-white rounded-2 p-2'>Se ha registrado exitosamente</p>}
                    <button
                        className='btn btn-dark'
                        type='submit'
                    >Registrarse</button>
                    <p className='mt-3'>¿Ya tienes una cuenta?<br /><Link className='text-info fw-bold' to='/desafio-pizzeria-mamma-mia/login'>Inicia Sesión</Link></p>
                </div>
            </div>

        </form>
    );
}
