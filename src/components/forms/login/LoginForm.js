import React from 'react';
import '../FormStyle.css';
import {Link} from 'react-router-dom';

import UseLogin from './UseLogin';


function LoginForm() {

    const {handleChange, user, handleSubmit} = UseLogin();

    return (

        <form onSubmit={handleSubmit}>
            <div className='form'>

                    <label htmlFor='email'>E-mail:</label>
                    <input type="email" name="email" id="email" value={user.email} onChange={handleChange} />


                    <label htmlFor='password'>Hasło:</label>
                    <input type="password" name="password" id="password" value={user.password} onChange={handleChange} />
                    </div>
                <div className='btns'>
                    <Link to={'/'}>
                        <button className='btn'>Wstecz</button>
                    </Link>
                    <button className='btn' type='submit'>Zaloguj</button>
                </div>


        </form>
    )
}

export default LoginForm
