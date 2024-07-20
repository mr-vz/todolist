// @flow
import * as React from 'react';
import {TaskEl} from "./TaskEl";
import {Button} from "./Button";

type TodolistProps = {
    title1: string
    title2?: string
    title3?: string
    tasks: TaskProps[]
};

export type TaskProps = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: TodolistProps) => {
    const {title1, tasks} = props

    const mappedTask = tasks.length
        ? tasks.map(el => {
            return (
                <TaskEl
                    //key={el.id}
                    {...el}/>
                // <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
            )
        })
        : <div>No data</div>

    return (
        <div>
            <h3>{title1}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {mappedTask}
            </ul>
            <div>
                <Button title={'All'}/>
                <Button title={'Active'}/>
                <Button title={'Completed'}/>
            </div>
        </div>
    );
};

// import React from 'react';
// import {TaskEl} from "./TaskEl";
// import {Button} from "./Button";
//
// type PropsType = {
//     truck?: string
//     //task?: Array<Task>
//     task: Task[]
// }
//
// export type Task = {
//     id: number,
//     title: string,
//     isDone: boolean
// }
//
// export const Todolist = ({truck, task}: PropsType) => {
// //export const Todolist = (props: PropsType) => {
//
//     // const name = props.name
//     // const name2 = props.name2
//     //const {name, name2} = props
//
//     const mappedTask = task.length ? task.map((el,index)=> {
//             //debugger
//             return (
//                 <TaskEl {...el} key={el.id}/>
//             )
//         }
//     ): <div>Empty</div>
//
//     return (
//         <div>
//             <h3>{truck}</h3>
//             <div>
//                 <input/>
//                 <button>+</button>
//             </div>
//             <ul>
//                 {mappedTask}
//             </ul>
//             <div>
//                 <Button title={'All'}/>
//                 <Button title={'Active'}/>
//                 <Button title={'Completed'}/>
//             </div>
//         </div>
//     );
// };