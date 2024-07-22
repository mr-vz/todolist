import {TaskType} from "./App";
import {Button} from "./Button";

type PropsType = {
	title: string
	tasks: TaskType[]
	removeTask: (id: number) => void
	filterTasks: () => void
}

export const Todolist = ({title, tasks, removeTask, filterTasks}: PropsType) => {

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
						{tasks.map((task) => {
							return <li key={task.id}>
								<button onClick={() => {removeTask(task.id)}}>X</button>
								<input type="checkbox" checked={task.isDone}/>
								<span>{task.title}</span></li>
						})}
					</ul>
			}
			<div>
				<button onClick={filterTasks}>All</button>
				<button onClick={filterTasks}>Active</button>
				<button onClick={filterTasks}>Completed</button>
				{/*<Button title={'All'}/>*/}
				{/*<Button title={'Active'}/>*/}
				{/*<Button title={'Completed'}/>*/}
			</div>
		</div>
	)
}
