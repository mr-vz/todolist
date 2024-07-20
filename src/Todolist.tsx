import React from 'react';
import {TaskEl} from "./TaskEl";
import {Button} from "./Button";

type PropsType = {
    truck?: string
    //task?: Array<Task>
    task: Task[]
}

export type Task = {
    id: number,
    title: string,
    isDone: boolean
}

export const Todolist = ({truck, task}: PropsType) => {
//export const Todolist = (props: PropsType) => {

    // const name = props.name
    // const name2 = props.name2
    //const {name, name2} = props

    const mappedTask = task.length ? task.map((el,index)=> {
            //debugger
            return (
                <TaskEl {...el} key={el.id}/>
            )
        }
    ): <div>Empty</div>

    return (
        <div>
            <h3>{truck}</h3>
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