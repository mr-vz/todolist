import {FilterValuesType, TaskType} from "./App";
import * as React from "react";
import {ChangeEvent} from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from "@mui/material/Box";
import {filterButtonsContainerSx, getListItemSx} from "./Todolist.styles";


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
    updateTask: (todolistId: string, taskId: string, title: string) => void
    updateTodolist: (todolistId: string, title: string) => void
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
        updateTask,
        updateTodolist
    } = props

    const changeFilterTasksHandler = (filter: FilterValuesType) => {
        changeFilter(filter, props.todolistId)
    }

    const removeTodolistHandler = () => {
        removeTodolist(todolistId)
    }

    const addTaskCallback = (title: string) => {
        addTask(title, props.todolistId)
    }

    const updateTodolistHandler = (title: string) => {
        updateTodolist(props.todolistId, title)
    }

    return (
        <div>
            <div className={"todolist-title-container"}>
                <h3>
                    <EditableSpan value={title} onChange={updateTodolistHandler}/>
                    <IconButton aria-label="delete" onClick={removeTodolistHandler}>
                        <DeleteIcon/>
                    </IconButton>
                </h3>


            </div>
            <AddItemForm addItem={addTaskCallback}/>
            {
                tasks.length === 0
                    ? <p>Тасок нет</p>
                    : <List>
                        {tasks.map((task) => {

                            const removeTaskHandler = () => {
                                removeTask(task.id, todolistId)
                            }

                            const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                                const newStatusValue = e.currentTarget.checked
                                changeTaskStatus(task.id, newStatusValue, todolistId)
                            }

                            const changeTaskTitleHandler = (title: string) => {
                                updateTask(todolistId, task.id, title)
                            }

                            return <ListItem
                                key={task.id}
                                sx={getListItemSx(task.isDone)}
                            >
                                <div>
                                    <Checkbox checked={task.isDone} onChange={changeTaskStatusHandler}/>
                                    <EditableSpan value={task.title} onChange={changeTaskTitleHandler}/>
                                </div>


                                <IconButton aria-label="delete" onClick={removeTaskHandler}>
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItem>
                        })}
                    </List>
            }
            <div>


                <Box sx={filterButtonsContainerSx}>
                    <Button variant={filter === 'all' ? "outlined" : "contained"}
                            onClick={() => changeFilterTasksHandler('all')} color="success">All</Button>
                    <Button variant={filter === 'active' ? "outlined" : "contained"}
                            onClick={() => changeFilterTasksHandler('active')} color="error">Active</Button>
                    <Button variant={filter === 'completed' ? "outlined" : "contained"}
                            onClick={() => changeFilterTasksHandler('completed')} color="secondary">Completed</Button>

                </Box>
            </div>
        </div>
    )
}
