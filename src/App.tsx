import './App.css';
import {Todolist} from "./Todolist";
import {useState} from "react";

export type TaskType = {
	id: number
	title: string
	isDone: boolean
}

export type FilterValue = 'All' | 'Active' | 'Completed'

function App() {
	let [tasks, setTasks] =  useState<TaskType[]>([
		{ id: 1, title: 'HTML&CSS', isDone: true },
		{ id: 2, title: 'JS', isDone: true },
		{ id: 3, title: 'ReactJS', isDone: false },
		{ id: 4, title: 'Redux', isDone: false },
		{ id: 5, title: 'Typescript', isDone: false },
		{ id: 6, title: 'RTK query', isDone: false },
	])

	const removeTask = (taskId: number) => {
		setTasks(tasks.filter(el => el.id !== taskId))
	}

	// const [filterValue, setFilterValue] = useState<FilterValue>('All')
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
			/>
		</div>
	);
}

export default App;
