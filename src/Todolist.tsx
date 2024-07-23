import {FilterValue, TaskType} from "./App";
import {Button} from "./Button";
import {useState} from "react";

type PropsType = {
	title: string
	tasks: TaskType[]
	removeTask: (id: number) => void
}

export const Todolist = ({title, tasks, removeTask}: PropsType) => {

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

	return (
		<div>
			<h3>{title}</h3>
			<div>
				<input/>
				<Button title={'+'}/>
			</div>
			{
				tasks.length === 0
					? <p>Тасок нет</p>
					: <ul>
						{resultFoo.map((task) => {
							return <li key={task.id}>
								<button onClick={() => {removeTask(task.id)}}>X</button>
								<input type="checkbox" checked={task.isDone}/>
								<span>{task.title}</span></li>
						})}
					</ul>
			}
			<div>
				<button onClick={() => filterTasks('All')}>All</button>
				<button onClick={() => filterTasks('Active')}>Active</button>
				<button onClick={() => filterTasks('Completed')}>Completed</button>
				{/*<Button title={'All'}/>*/}
				{/*<Button title={'Active'}/>*/}
				{/*<Button title={'Completed'}/>*/}
			</div>
		</div>
	)
}
