// @flow 
import * as React from 'react';
import {TaskProps} from "./Todolist";

export const TaskEl = ({isDone, title}: TaskProps) => {
    return (
        <li><input type="checkbox" checked={isDone}/> <span>{title}</span></li>
    );
};

// import {Task} from "./Todolist";
//
// export const TaskEl = ({id, title, isDone}: Task) => {
//         return (
//             <li>
//                 <input type="checkbox" checked={isDone}/>
//                 <span>{title}</span>
//             </li>
//         );
// };