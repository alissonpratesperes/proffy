import React from "react";

import whatsapp from "../../assets/icons/whatsapp.svg";
import TeacherProps from "../../interfaces/TeacherProps.interface";
import api from "../../services/api";
import "./styles.css";

    const Teacher: React.FunctionComponent<TeacherProps> = ({ teacher }) => {
        function handleCreateNewConnection() {
            api.post("/connections", { teacher_id: teacher.id });
        };

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
                                    <a href={`https://wa.me/${teacher.whatsapp}`} target="_blank" onClick={ handleCreateNewConnection }>
                                        <img src={ whatsapp } alt="WhatsApp"/>
                                            WhatsApp
                                    </a>
                            </footer>
                </article>
            );
    };

        export default Teacher;