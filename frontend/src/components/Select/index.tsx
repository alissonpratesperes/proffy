import React from "react";

import SelectProps from "../../interfaces/SelectProps.interface";
import "./styles.css";

    const Input: React.FunctionComponent<SelectProps> = ({ label, name, ...rest }) => {
        return (
            <div className="select-block">
                <label htmlFor={ name }> { label } </label>
                    <select id={ name } { ...rest }/>
            </div>
        );
    };

        export default Input;