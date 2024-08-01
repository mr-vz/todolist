import './App.css';
import {Todolist} from "./Todolist";
import {useState} from "react";
import {v1} from "uuid";

export type TaskType = {
	id: string
	title: string
	isDone: boolean
}

export type FilterValue = 'All' | 'Active' | 'Completed'

function App() {
	let [tasks, setTasks] =  useState<TaskType[]>([
		{ id: v1(), title: 'HTML&CSS', isDone: true },
		{ id: v1(), title: 'JS', isDone: true },
		{ id: v1(), title: 'ReactJS', isDone: false },
		{ id: v1(), title: 'Redux', isDone: false },
		{ id: v1(), title: 'Typescript', isDone: false },
		{ id: v1(), title: 'RTK query', isDone: false },
	])

	//console.log(tasks)

	const removeTask = (taskId: string) => {
		setTasks(tasks.filter(el => el.id !== taskId))
	}

	const [filterValue, setFilterValue] = useState<FilterValue>('All')

	const addTask = (newTitle: string) => {
		const newTask = { id: v1(), title: newTitle || 'new title', isDone: false }
		setTasks([newTask ,...tasks])
	}

	//
	// const filterTasks = (value: FilterValue) => {
	// 	setFilterValue(value)
	// }
	//
	// let filteredTasks = tasks
	// if(filterValue === 'Active') filteredTasks = tasks.filter(el => !el.isDone)
	// if(filterValue === 'Completed') filteredTasks = tasks.filter(el => el.isDone)

	return (
		<div className="App">
			<Todolist
				title="What to learn"
				tasks={tasks}
				removeTask={removeTask}
				addTask={addTask}
			/>
		</div>
	)
}

export default App;
