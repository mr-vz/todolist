import {Task} from "./Todolist";

export const TaskEl = ({id, title, isDone}: Task) => {
        return (
            <li>
                <input type="checkbox" checked={isDone}/>
                <span>{title}</span>
            </li>
        );
};