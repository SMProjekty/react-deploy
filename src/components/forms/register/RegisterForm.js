import React from 'react';
import { Link } from 'react-router-dom';

import '../FormStyle.css';

import UseRegister from './UseRegister';

function RegisterForm() {

    const {handleChange, user, handleSubmit, errors} = UseRegister();

    return (
        <div>
            <div className='error'>
                <p>{errors}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form'>
                    <label htmlFor='email'>E-mail:</label>
                    <input type="email"  name="email" id="email" value={user.email} onChange={handleChange} />

                    <label htmlFor='password'>Hasło:</label>
                    <input type="password" name="password" id="password" value={user.password} onChange={handleChange} />

                    <label htmlFor='password2'>Powtórz Hasło:</label>
                    <input type="password" name="password2" id="password2" value={user.password2} onChange={handleChange} />


                    <label htmlFor='fst_name'>Imię:</label>
                    <input type="text" name="fst_name" id="fst_name" value={user.fst_name} onChange={handleChange} />


                    <label htmlFor='sec_name'>Nazwisko:</label>
                    <input type="text" name="sec_name" id="sec_name" value={user.sec_name} onChange={handleChange} />


                    <label htmlFor='phone'>Telefon:</label>
                    <input type="phone" name="phone" id="phone" value={user.phone} onChange={handleChange} />
                </div>
                <div className='btns'>
                    <Link to={'/react-deploy'}>
                        <button  className='btn'>{"Wstecz"}</button>
                    </Link>
                    <button className='btn' type='submit'>Zarejestruj</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm
