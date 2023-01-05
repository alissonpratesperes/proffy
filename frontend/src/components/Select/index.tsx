import React from "react";

import SelectProps from "../../interfaces/SelectProps.interface";
import "./styles.css";

    const Input: React.FunctionComponent<SelectProps> = ({ label, name, options, ...rest }) => {
        return (
            <div className="select-block">
                <label htmlFor={ name }>
                    { label }
                </label>
                    <select defaultValue="" id={ name } { ...rest }>
                        <option value="" disabled hidden> Selecione uma opção </option>
                            { options.map(option => {
                                return <option key={ option.value } value={ option.value }> { option.label } </option>
                            }) }
                    </select>
            </div>
        );
    };

        export default Input;