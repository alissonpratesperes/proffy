import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import landing from "../../assets/images/landing.svg";
import study from "../../assets/icons/study.svg";
import classes from "../../assets/icons/give-classes.svg";
import heart from "../../assets/icons/purple-heart.svg";
import api from "../../services/api";
import "./styles.css";

    function Landing() {
        const [ totalConnections, setTotalConnections ] = useState(0); 

            useEffect(() => {
                api.get("/connections").then(response => {
                    const { total } = response.data;
                        setTotalConnections(total);
                });
            }, []);

                return (
                    <div id="page_landing">
                        <div id="page_landing_content" className="container">
                            <div className="container-logo">
                                <img src={ logo } alt="Proffy"/>
                                    <h2> Sua plataforma de estudos on-line </h2>
                            </div>
                                <img className="landing-image" src={ landing } alt="Landing"/>
                                    <div className="container-buttons">
                                        <Link className="study-button" to="/studies">
                                            <img src={ study } alt="Studies"/>
                                                Estudar
                                        </Link>
                                        <Link className="class-button" to="/classes">
                                            <img src={ classes } alt="Classes"/>
                                                Lecionar
                                        </Link>
                                    </div>
                                        <span className="total-connections">
                                            Total de { totalConnections } conexões já realizadas
                                                <img src={ heart } alt="Heart"/>
                                        </span>
                        </div>
                    </div>
                );
    };

        export default Landing;