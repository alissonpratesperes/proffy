import { SelectHTMLAttributes } from "react";

    interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
        label: string;
        name: string;
        options: Array<{
            value: string;
            label: string;
        }>;
    };
        export default SelectProps;