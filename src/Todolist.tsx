import {FilterValuesType, TaskType} from "./App";
import {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button} from "./Button";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";

type PropsType = {
	title: string
	todolistId: string
	tasks: TaskType[]
	removeTask: (taskId: string, todolistId: string) => void
	changeFilter: (filter: FilterValuesType, todolistId: string) => void
	addTask: (title: string, todolistId: string) => void
	changeTaskStatus: (taskId: string, taskStatus: boolean, todolistId: string) => void
	filter: FilterValuesType
	removeTodolist: (todolistId: string) => void
	updateTaskTitle: (todolistId: string, taskId: string, updatedTitle: string) => void
	updateTodolistTitle: (todolistId: string, updatedTitle: string) => void
}

export const Todolist = (props: PropsType) => {
	const {
		title,
		tasks,
		filter,
		removeTask,
		changeFilter,
		addTask,
		changeTaskStatus,
		todolistId,
		removeTodolist,
		updateTaskTitle,
		updateTodolistTitle
	} = props

	const changeFilterTasksHandler = (filter: FilterValuesType) => {
		changeFilter(filter, props.todolistId)
	}

	const removeTodolistHandler = () => {
		removeTodolist(todolistId)
	}

	const addTaskHandler = (title: string) => {
		addTask(title, todolistId)
	}

	const updateTodolistTitleHandler = (updateTitle: string) => {
		updateTodolistTitle(todolistId, updateTitle)
	}

	const updateTaskTitleHandler = (taskId: string, updateTitle: string) => {
		updateTaskTitle(todolistId, taskId, updateTitle)
	}

	return (
		<div>
			<div className={"todolist-title-container"}>
				{/*<h3>{title}</h3>*/}
				<h3><EditableSpan oldTitle={title} onClick={updateTodolistTitleHandler}/></h3>
				<Button title={'x'} onClick={removeTodolistHandler}/>
			</div>
			<AddItemForm addItem={addTaskHandler} />
			{/*<div>*/}
			{/*	<input*/}
			{/*		className={error ? 'error' : ''}*/}
			{/*		value={taskTitle}*/}
			{/*		onChange={changeTaskTitleHandler}*/}
			{/*		onKeyUp={addTaskOnKeyUpHandler}*/}
			{/*	/>*/}
			{/*	<Button title={'+'} onClick={addTaskHandler}/>*/}
			{/*	{error && <div className={'error-message'}>{error}</div>}*/}
			{/*</div>*/}
			{
				tasks.length === 0
					? <p>Тасок нет</p>
					: <ul>
						{tasks.map((task) => {

							const removeTaskHandler = () => {
								removeTask(task.id, todolistId)
							}

							const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
								const newStatusValue = e.currentTarget.checked
								changeTaskStatus(task.id, newStatusValue, todolistId)
							}

							// const updateTaskTitleHandler = (updateTitle: string) => {
							// 	updateTaskTitle(todolistId, task.id, updateTitle)
							// }

							return <li key={task.id} className={task.isDone ? 'is-done' : ''}>
								<input type="checkbox" checked={task.isDone} onChange={changeTaskStatusHandler}/>
								{/*<span>{task.title}</span>*/}
								<EditableSpan oldTitle={task.title} onClick={(updateTitle: string)=>updateTaskTitleHandler(task.title, updateTitle)}/>
								<Button onClick={removeTaskHandler} title={'x'}/>
							</li>
						})}
					</ul>
			}
			<div>
				<Button className={filter === 'all' ? 'active-filter' : ''} title={'All'}
				        onClick={() => changeFilterTasksHandler('all')}/>
				<Button className={filter === 'active' ? 'active-filter' : ''} title={'Active'}
				        onClick={() => changeFilterTasksHandler('active')}/>
				<Button className={filter === 'completed' ? 'active-filter' : ''} title={'Completed'}
				        onClick={() => changeFilterTasksHandler('completed')}/>
			</div>
		</div>
	)
}
