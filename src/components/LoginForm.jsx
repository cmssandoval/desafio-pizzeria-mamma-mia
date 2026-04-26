import React, { useState } from 'react';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [submitSuccess, setSubmitSuccess] = useState(false);

    const [emptyError, setEmptyError] = useState(false);
    const [passwordLengthError, setPasswordLengthError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitSuccess(false);

        if ( !email.trim() || !password.trim()) {
            setEmptyError(true);
            setPasswordLengthError(false);
            return;
        } else if ( password.length < 6 ) {
            setPasswordLengthError(true);
            setEmptyError(false);
            return;
        }

        setEmail('');
        setPassword('');

        setEmptyError(false);
        setPasswordLengthError(false);

        setSubmitSuccess(true);
    }

    return (
        <form className='container text-center py-2' onSubmit={(e) => {handleSubmit(e)}}>
            <div className='row flex-column align-items-center justify-content-center my-2'>
                <h2 className='fw-bold m-0 pb-3'>Inicio de Sesión</h2>
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
                <div className='form-group col-9 col-sm-8 col-md-6 py-3 px-5'>
                {emptyError ? <p className='bg-danger text-white rounded-2 p-2'>Debe llenar todos los campos</p> : null}
                {passwordLengthError ? <p className='bg-danger text-white rounded-2 p-2'>La contraseña debe tener como mínimo 6 caracteres</p> : null}
                {submitSuccess ? <p className='bg-success text-white rounded-2 p-2'>Ha inciado sesión exitosamente</p> : null}
                    <button
                        className='btn btn-primary'
                        type='submit'
                    >Iniciar sesión</button>
                </div>
            </div>
        </form>
    )
}
