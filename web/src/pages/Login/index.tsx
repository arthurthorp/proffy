import React from 'react';
import { Link } from 'react-router-dom';

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

            <main className="login-main">
                <div className="content-main">
                    <div className="header-main">
                        <strong className="title-main">Fazer login</strong>
                        <Link className="register-main" to="/">
                            Criar uma conta
                        </Link>
                    </div>

                    <div className="form-main">
                        <input type="email" placeholder="E-mail" className="input-login" required/>
                        <input type="password" placeholder="Senha" className="input-login" required/>
                        <i className="eye-off-outline"></i>
                    </div>

                    <div className="footer-main">
                        <div className="remember-me">
                            <input type="checkbox" id="remember" name="remember-me"/>
                            <label form="remember">Lembrar-me</label>
                        </div>
                        <a className="forgot-password" href="#">Esqueci minha senha</a>
                    </div>

                    <button className="sing-in" type="submit">
                        Entrar
                    </button>
                </div>

            </main>
        </div>
    );
}

export default Login;