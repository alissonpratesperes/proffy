import react from "react";

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
                                <a className="study-button" href="">
                                    <img src={ study } alt="Studies"/>
                                        Estudar
                                </a>
                                <a className="class-button" href="">
                                    <img src={ classes } alt="Classes"/>
                                        Lecionar
                                </a>
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