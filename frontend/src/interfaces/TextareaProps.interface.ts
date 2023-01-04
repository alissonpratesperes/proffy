import { TextareaHTMLAttributes } from "react";

    interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
        label: string;
        name: string;
    };
        export default TextareaProps;