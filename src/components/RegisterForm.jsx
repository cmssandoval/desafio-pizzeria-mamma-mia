import React, { useState } from 'react';

export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation,setPasswordConfirmation] = useState('');

    const [submitSuccess, setSubmitSuccess] = useState(false);

    const [emptyError, setEmptyError] = useState(false);
    const [passwordLengthError, setPasswordLengthError] = useState(false);
    const [passwordConfirmationError, setPasswordConfirmationError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitSuccess(false);

        if ( !email.trim() || !password.trim() || !passwordConfirmation.trim()) {
            setEmptyError(true);
            setPasswordLengthError(false);
            setPasswordConfirmationError(false);
            return;
        } else if ( password.length < 6 ) {
            setEmptyError(false);
            setPasswordLengthError(true);
            setPasswordConfirmationError(false);
            return;
        } else if ( password !== passwordConfirmation) {
            setEmptyError(false);
            setPasswordLengthError(false);
            setPasswordConfirmationError(true);
            return;
        }

        setEmail('');
        setPassword('');
        setPasswordConfirmation('');

        setEmptyError(false);
        setPasswordLengthError(false);
        setPasswordConfirmationError(false);

        setSubmitSuccess(true);
    }

    return (
        <form className='container text-center py-2' onSubmit={(e) => {handleSubmit(e)}}>
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
                {emptyError ? <p className='bg-danger text-white rounded-2 p-2'>Debe llenar todos los campos</p> : null}
                {passwordLengthError ? <p className='bg-danger text-white rounded-2 p-2'>La contraseña debe tener como mínimo 6 caracteres</p> : null}
                {passwordConfirmationError ? <p className='bg-danger text-white rounded-2 p-2'>Las contraseñas deben ser iguales</p> : null}
                {submitSuccess ? <p className='bg-success text-white rounded-2 p-2'>Se ha registrado exitosamente</p> : null}
                    <button
                        className='btn btn-primary'
                        type='submit'
                    >Registrarse</button>
                </div>
            </div>

        </form>
    )
}
