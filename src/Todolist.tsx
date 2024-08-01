import {FilterValue, TaskType} from "./App";
import {Button} from "./Button";
import {useRef, useState, KeyboardEvent, ChangeEvent} from "react";

type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (id: string) => void
    addTask: (newTitle: string) => void
}

export const Todolist = ({title, tasks, removeTask, addTask}: PropsType) => {

    const [filterValue, setFilterValue] = useState<FilterValue>('All')
    const filterTasks = (value: FilterValue) => {
        setFilterValue(value)
    }
    const filterFoo = () => {
        switch (filterValue) {
            case "All": {
                return tasks
            }
            case "Active": {
                return tasks.filter(el => !el.isDone)
            }
            case "Completed": {
                return tasks.filter(el => el.isDone)
            }
        }
    }
    const resultFoo = filterFoo()

    const [newTitle, setNewTitle] = useState('')

    const removeTaskHandler = (taskId: string) => {
        removeTask(taskId)
    }

    const addTaskHandler = () => {
        addTask(newTitle)
        setNewTitle('')
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter') {
            addTaskHandler()
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const mappedTask =
        tasks.length === 0
            ? <p>Тасок нет</p>
            : <ul>
                {resultFoo.map((task) => {
                    // const removeTaskHandler = () => {
                    //     removeTask(task.id)
                    // }
                    return <li key={task.id}>
                        <button onClick={()=>removeTaskHandler(task.id)}>X
                        </button>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span></li>
                })}
            </ul>

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input
                    value={newTitle}
                    onChange={onChangeHandler}
                    onKeyDown={onKeyDownHandler}
                />
                <button onClick={addTaskHandler}>+
                </button>
                {/*<Button title={'+'}/>*/}
            </div>
            {mappedTask}
            <div>
                {/*<button onClick={() => filterTasks('All')}>All</button>*/}
                {/*<button onClick={() => filterTasks('Active')}>Active</button>*/}
                {/*<button onClick={() => filterTasks('Completed')}>Completed</button>*/}
                <Button title={'All'} onClick={() => filterTasks('All')}/>
                <Button title={'Active'} onClick={() => filterTasks('Active')}/>
                <Button title={'Completed'} onClick={() => filterTasks('Completed')}/>
            </div>
        </div>
    )
}

//REF------------------------------------------------------------------------------
// import {FilterValue, TaskType} from "./App";
// import {Button} from "./Button";
// import {useRef, useState} from "react";
//
// type PropsType = {
// 	title: string
// 	tasks: TaskType[]
// 	removeTask: (id: string) => void
// 	addTask: (newTitle: string) => void
// }
//
// export const Todolist = ({title, tasks, removeTask, addTask}: PropsType) => {
//
// 	const inputRef = useRef<HTMLInputElement>(null)
//
// 	const [filterValue, setFilterValue] = useState<FilterValue>('All')
//
// 	const filterTasks = (value: FilterValue) => {
// 		setFilterValue(value)
// 	}
//
// 	const filterFoo = () => {
// 		switch (filterValue) {
// 			case "All": {
// 				return tasks
// 			}
// 			case "Active": {
// 				return tasks.filter(el => !el.isDone)
// 			}
// 			case "Completed": {
// 				return tasks.filter(el => el.isDone)
// 			}
// 		}
// 	}
//
// 	const resultFoo = filterFoo()
//
// 	return (
// 		<div>
// 			<h3>{title}</h3>
// 			<div>
// 				<input ref={inputRef}/>
// 				<button onClick={()=> {
// 					if(inputRef.current) {
// 						addTask(inputRef.current.value)
// 					}
// 				}}>+</button>
// 				{/*<Button title={'+'}/>*/}
// 			</div>
// 			{
// 				tasks.length === 0
// 					? <p>Тасок нет</p>
// 					: <ul>
// 						{resultFoo.map((task) => {
// 							return <li key={task.id}>
// 								<button onClick={() => {removeTask(task.id)}}>X</button>
// 								<input type="checkbox" checked={task.isDone}/>
// 								<span>{task.title}</span></li>
// 						})}
// 					</ul>
// 			}
// 			<div>
// 				<button onClick={() => filterTasks('All')}>All</button>
// 				<button onClick={() => filterTasks('Active')}>Active</button>
// 				<button onClick={() => filterTasks('Completed')}>Completed</button>
// 				{/*<Button title={'All'}/>*/}
// 				{/*<Button title={'Active'}/>*/}
// 				{/*<Button title={'Completed'}/>*/}
// 			</div>
// 		</div>
// 	)
// }
