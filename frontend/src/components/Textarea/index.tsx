import React from "react";

import TextareaProps from "../../interfaces/TextareaProps.interface";
import "./styles.css";

    const Input: React.FunctionComponent<TextareaProps> = ({ label, name, ...rest }) => {
        return (
            <div className="textarea-block">
                <label htmlFor={ name }>
                    { label }
                </label>
                    <textarea id={ name } { ...rest }/>
            </div>
        );
    };

        export default Input;