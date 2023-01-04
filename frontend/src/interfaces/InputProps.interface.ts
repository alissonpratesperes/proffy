import { InputHTMLAttributes } from "react";

    interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
        label: string;
        name: string;
    };
        export default InputProps;