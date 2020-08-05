import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import TeacherForm from '../../pages/TeacherForm';

function TeacherItem (){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://lh3.googleusercontent.com/ogw/ADGmqu-iOa4zqlJ6P9kGEl3XT8mi386ZyVkyWuElvbhv=s32-c-mo" alt="Arthur Tavares"/>
                <div>
                    <strong>Arthur Tavares</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br/><br/>
                Ipsum at dignissimos vero eius. Incidunt asperiores pariatur blanditiis! Maiores distinctio possimus, ipsa eaque saepe animi fugit, nesciunt impedit ea quidem similique.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>

    );
}

export default TeacherItem;