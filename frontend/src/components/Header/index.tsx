import React from "react";
import { Link } from "react-router-dom";

import back from "../../assets/icons/back.svg";
import logo from "../../assets/images/logo.svg";
import HeaderProps from "../../interfaces/HeaderProps.interface";
import "./styles.css";

    const Header: React.FunctionComponent<HeaderProps> = (properties) => {
        return (
            <header className="page_header">
                <div className="top_bar_container">
                    <Link to="/">
                        <img src={ back } alt="Back"/>
                    </Link>
                        <img src={ logo } alt="Proffy"/>
                </div>
                <div className="page_header_content">
                    <strong>
                        { properties.title }
                    </strong>
                        { properties.description && <p> { properties.description } </p> }
                        { properties.children }
                </div>
            </header>
        );
    };

        export default Header;