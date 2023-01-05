import React from "react";

import whatsapp from "../../assets/icons/whatsapp.svg";
import TeacherProps from "../../interfaces/TeacherProps.interface";
import "./styles.css";

    const Teacher: React.FunctionComponent<TeacherProps> = ({ teacher }) => {
        return (
            <article className="teacher-item">
                <header>
                    <img src={ teacher.avatar } alt={ teacher.name }/>
                        <div>
                            <strong> { teacher.name } </strong>
                                <span> { teacher.matter } </span>
                        </div>
                </header>
                    <p> { teacher.biography } </p>
                        <footer>
                            <p>
                                Hora
                                    <strong> R$ { teacher.cost } </strong>
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