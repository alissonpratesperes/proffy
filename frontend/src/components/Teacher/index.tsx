import React from "react";

import whatsapp from "../../assets/icons/whatsapp.svg";
import "./styles.css";

    function Teacher() {
        return (
            <article className="teacher-item">
                <header>
                    <img src="https://avatars.githubusercontent.com/u/2254731?v=4" alt="Alisson Prates Peres"/>
                        <div>
                            <strong> Alisson Prates Peres </strong>
                                <span> Desenvolvimento de Software </span>
                        </div>
                </header>
                    <p>
                        Entusiasta das melhores tecnologias de Química avançada.
                            <br/>
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais
                        de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>
                        <footer>
                            <p>
                                Hora
                                    <strong> R$ 80,00 </strong>
                            </p>
                                <button type="button">
                                    <img src={ whatsapp } alt="WhatsApp"/>
                                        Entrar em contato
                                </button>
                        </footer>
            </article>
        );
    };

        export default Teacher;