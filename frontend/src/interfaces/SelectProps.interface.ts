import { SelectHTMLAttributes } from "react";

    interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
        label: string;
        name: string;
    };
        export default SelectProps;