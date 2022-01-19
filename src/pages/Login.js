import React from 'react';

import LoginForm from '../components/forms/login/LoginForm';

function Login () {
    return(
        <div className='text'>
            <h1>Zaloguj się</h1>
            <LoginForm/>
        </div>
    );
}

export default Login;