import React from 'react';
import './App.css';
import {TaskProps, Todolist} from "./Todolist";

function App() {
    const title1 = 'what to learn 1'
    const title2 = 'what to learn 2'
    //const title3 = 'what to learn 111'

    const tasks1: TaskProps[] = [
        {id: 1, title: 'html, css', isDone: true},
        {id: 2, title: 'js', isDone: true},
        {id: 3, title: 'react', isDone: false}
    ]

    const tasks2: TaskProps[] = []

    return (
    <div className="App">
        <Todolist title1={title1} tasks={tasks1}/>
        <Todolist title1={title2} tasks={tasks2}/>

    </div>
    );
}

export default App;
