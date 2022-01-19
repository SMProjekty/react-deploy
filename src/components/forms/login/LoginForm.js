import React from 'react';
import {Link} from 'react-router-dom';

import '../FormStyle.css';

import UseLogin from './UseLogin';

function LoginForm() {
    const {handleChange, user, handleSubmit, errors} = UseLogin();

    return (
        <div>
            <div className='error'>
                <p>{errors}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form'>
                    <label htmlFor='email'>E-mail:</label>
                    <input type="email" name="email" id="email" value={user.email} onChange={handleChange} />

                    <label htmlFor='password'>Hasło:</label>
                    <input type="password" name="password" id="password" value={user.password} onChange={handleChange} />
                </div>

                <div className='btns-three'>
                    <button className='btn' type='submit'>Zaloguj</button>
                    <Link to={'/'}>
                        <button className='btn'>Wstecz</button>
                    </Link>
                    <Link to={'/admin'}>
                        <button className='btn'>Administrator</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
