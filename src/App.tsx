import React, { useState } from 'react'
import TaskForm from './components/TaskForm'
import TodoList from './components/TodoList'
import InProgressList from './components/InProgressList'
import DoneList from './components/DoneList'
import TASK from './interfaces/Task'
import './main.scss';

function App() {
    const [tasks, setTask] = useState<TASK[]>([
        {
            id: 1,
            status: "todo",
            title: "TODO 1",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        },
        {
            id: 2,
            status: "in_progress",
            title: "TODO 2",
            description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        },
        {
            id: 3,
            status: "done",
            title: "TODO 3",
            description: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        },
    ]);

    const addTask = (task: any) : void => {
        const last_id = tasks.length < 1 ? 1 : tasks[tasks.length - 1].id + 1;

        const data : TASK = {
            id: last_id,
            status: "todo",
            title: task.title,
            description: task.description,
        }

        setTask((prevTask: TASK[]): TASK[] => [...prevTask, data]);
    }

    const beginTask = (id: number) : void => {
        const currentTask: any = tasks.find((task : TASK) => task.id === id);
        currentTask.status = "in_progress";

        const updatedTask: TASK[] = tasks.map(
            (task: TASK): TASK => task.id === id ? currentTask : task
        );

        setTask(updatedTask);
    }

    const finishTask = (id: number) : void => {
        const currentTask: any = tasks.find((task : TASK) => task.id === id);
        currentTask.status = "done";

        const updatedTask: TASK[] = tasks.map(
            (task: TASK): TASK => task.id === id ? currentTask : task
        );

        setTask(updatedTask);
    }

    const deleteTask = (id: number) : void => {
        const updatedTask: TASK[] = tasks.filter(
            (task: TASK): any => task.id !== id
        );

        setTask(updatedTask);
    }

    return (
        <div className="kanban-wrapper">
            <TaskForm addTask = { addTask } />
            <div className="kanban">
                <TodoList tasks = { tasks } beginTask = { beginTask } finishTask = { finishTask } deleteTask = { deleteTask } />
                <InProgressList tasks = { tasks } finishTask = { finishTask } deleteTask = { deleteTask } />
                <DoneList tasks = { tasks } deleteTask = { deleteTask } />
            </div>
        </div>
    )
}

export default App
