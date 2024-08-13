import {FilterValuesType, TaskType} from "./App";
import {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button} from "./Button";

type PropsType = {
	todolistId:string
	title: string
	tasks: TaskType[]
	removeTask: (todolistID:string,taskId: string) => void
	changeFilter: (todolistID:string,filter: FilterValuesType) => void
	addTask: (todolistID:string,title: string) => void
	changeTaskStatus: (todolistID:string,taskId: string, taskStatus: boolean) => void
	filter: FilterValuesType
	removeTodolist: (todolistID:string)=>void
}

export const Todolist = (props: PropsType) => {
	const {todolistId,title, tasks, filter, removeTask, changeFilter, addTask, changeTaskStatus, removeTodolist} = props

	const [taskTitle, setTaskTitle] = useState('')
	const [error, setError] = useState<string | null>(null)

	//Todo:перенести условия
	// let tasksForTodolist = tasks
	// if (el.filter === 'active') {
	// 	tasksForTodolist = tasks.filter(task => !task.isDone)
	// }
	// if (el.filter === 'completed') {
	// 	tasksForTodolist = tasks.filter(task => task.isDone)
	// }


	const addTaskHandler = () => {
		if (taskTitle.trim() !== '') {
			addTask(todolistId,taskTitle.trim())
			setTaskTitle('')
		} else {
			setError('Title is required')
		}
	}

	const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTaskTitle(event.currentTarget.value)
	}

	const addTaskOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
		setError(null)
		if (event.key === 'Enter') {
			addTaskHandler()
		}
	}

	const changeFilterTasksHandler = (filter: FilterValuesType) => {
		changeFilter(todolistId,filter)
	}

	const removeTodolistHandler = () => {
		removeTodolist(props.todolistId)
	}

	return (
		<div>
			<h3>
				{title}
				<Button title={'x'} onClick={removeTodolistHandler}/>
			</h3>
			<div>
				<input
					className={error ? 'error': ''}
					value={taskTitle}
					onChange={changeTaskTitleHandler}
					onKeyUp={addTaskOnKeyUpHandler}
				/>
				<Button title={'+'} onClick={addTaskHandler}/>
				{error && <div className={'error-message'}>{error}</div> }
			</div>
			{
				tasks.length === 0
					? <p>Тасок нет</p>
					: <ul>
						{tasks.map((task) => {

							const removeTaskHandler = () => {
								removeTask(todolistId,task.id)
							}

							const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
								const newStatusValue = e.currentTarget.checked
								changeTaskStatus(todolistId,task.id, newStatusValue)
							}

							return <li key={task.id} className={task.isDone ? 'is-done' : ''}>
								<input type="checkbox" checked={task.isDone} onChange={changeTaskStatusHandler}/>
								<span>{task.title}</span>
								<Button onClick={removeTaskHandler} title={'x'}/>
							</li>
						})}
					</ul>
			}
			<div>
				<Button className={filter === 'all' ? 'active-filter' : '' } title={'All'} onClick={()=> changeFilterTasksHandler('all')}/>
				<Button className={filter === 'active' ? 'active-filter' : '' } title={'Active'} onClick={()=> changeFilterTasksHandler('active')}/>
				<Button className={filter === 'completed' ? 'active-filter' : '' } title={'Completed'} onClick={()=> changeFilterTasksHandler('completed')}/>
			</div>
		</div>
	)
}
