import React from 'react';

import logoImg from '../../assets/images/logo.svg';

import './styles.css';

function Login() {

    return (
        <div id="page-login">
            <header className="login-header">
                <div className="content-header">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>
            </header>
        </div>
    );
}

export default Login;