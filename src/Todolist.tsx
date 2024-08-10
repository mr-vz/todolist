import {FilterValuesType, TaskType} from "./App";
import {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button} from "./Button";
import s from './todolist.module.css'

type PropsType = {
	title: string
	tasks: TaskType[]
	removeTask: (taskId: string) => void
	changeFilter: (filter: FilterValuesType) => void
	addTask: (title: string) => void
    changeStatus: (taskId: string ,isDone: boolean) => void
}

export const Todolist = ({title, tasks, removeTask, changeFilter, addTask, changeStatus}: PropsType) => {
	const [taskTitle, setTaskTitle] = useState('')
	const [error, setError] = useState<null | string>(null)
	const [nameButton, setNameButton] = useState('all')

	const addTaskHandler = () => {
		if(taskTitle.trim()) {
			addTask(taskTitle.trim())
		} else {
			setError('Title is requred!')
		}
		setTaskTitle('')
	}

	const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTaskTitle(event.currentTarget.value)
		setError(null)
	}

	const addTaskOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			addTaskHandler()
		}
	}

	const changeFilterTasksHandler = (filter: FilterValuesType) => {
		changeFilter(filter)
		setNameButton(filter)
	}

    const changeStatusHandler = (taskId: string, value: boolean) => {
        changeStatus(taskId, value)
    }

	return (
		<div>
			<h3>{title}</h3>
			<div>
				<input
					value={taskTitle}
					onChange={changeTaskTitleHandler}
					onKeyUp={addTaskOnKeyUpHandler}
					className={error ? s.error : ''}
				/>
				<Button title={'+'} onClick={addTaskHandler}/>
			</div>
			{error&&<span className={s.errorMessage}>{error}</span>}
			{
				tasks.length === 0
					? <p>Тасок нет</p>
					: <ul>
						{tasks.map((task) => {

							const removeTaskHandler = () => {
								removeTask(task.id)
							}

							return <li key={task.id} className={task.isDone ? s.isDone : ''}>
								<input type="checkbox" checked={task.isDone} onChange={(e)=> changeStatusHandler(task.id, e.currentTarget.checked)}/>
								<span>{task.title}</span>
								<Button onClick={removeTaskHandler} title={'x'}/>
							</li>
						})}
					</ul>
			}
			<div>
				<Button className={nameButton === 'all' ? s.activeFilter : ''} title={'all'} onClick={()=> changeFilterTasksHandler('all')}/>
				<Button className={nameButton === 'active' ? s.activeFilter : ''} title={'active'} onClick={()=> changeFilterTasksHandler('active')}/>
				<Button className={nameButton === 'completed' ? s.activeFilter : ''} title={'completed'} onClick={()=> changeFilterTasksHandler('completed')}/>
			</div>
		</div>
	)
}
