// @flow
import * as React from 'react';
import {ButtonHTMLAttributes} from "react";

// type Props = {
//     title: string
// };

export const Button = ({title}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button type="reset">{title}</button>
    );
};

// import React, {ButtonHTMLAttributes} from "react";
//
// type Props = ButtonHTMLAttributes<HTMLButtonElement>
//
// export const Button = ({title}: Props) => {
//     return (
//         <button>{title}</button>
//     );
// };