import React, {ButtonHTMLAttributes} from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({title}: Props) => {
    return (
        <button>{title}</button>
    );
};