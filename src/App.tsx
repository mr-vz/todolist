import './App.css';
import {Todolist} from "./Todolist";
import {useState} from "react";

export type TaskType = {
	id: number
	title: string
	isDone: boolean
}

function App() {

	let [tasks, setTasks] =  useState<TaskType[]>([
		{ id: 1, title: 'HTML&CSS', isDone: true },
		{ id: 2, title: 'JS', isDone: true },
		{ id: 3, title: 'ReactJS', isDone: false },
		{ id: 4, title: 'Redux', isDone: false },
		{ id: 5, title: 'Typescript', isDone: false },
		{ id: 6, title: 'RTK query', isDone: false },
	])

	const filterTasks = () => {
		console.log('hello')
	}

	const removeTask = (taskId: number) => {
		setTasks(tasks.filter(el => el.id !== taskId))
	}

	return (
		<div className="App">
			<Todolist
				title="What to learn"
				tasks={tasks}
				removeTask={removeTask}
				filterTasks={filterTasks}
			/>
			{/*<Todolist title="Songs" tasks={tasks2}/>*/}
		</div>
	);
}

export default App;
