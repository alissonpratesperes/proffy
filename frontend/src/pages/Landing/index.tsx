import react from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import landing from "../../assets/images/landing.svg";
import study from "../../assets/icons/study.svg";
import classes from "../../assets/icons/give-classes.svg";
import heart from "../../assets/icons/purple-heart.svg";
import "./styles.css";

    function Landing() {
        return (
            <div id="page_landing">
                <div id="page_landing_content" className="container">
                    <div className="container-logo">
                        <img src={ logo } alt="Proffy"/>
                            <h2> Sua plataforma de estudos on-line </h2>
                    </div>
                        <img src={ landing } alt="Landing" className="landing-image"/>
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
                                    Total de 200 conexões já realizadas
                                        <img src={ heart } alt="Heart"/>
                                </span>
                </div>
            </div>
        );
    };

        export default Landing;