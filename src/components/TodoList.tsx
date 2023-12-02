import React, { FunctionComponent } from 'react'
import TASK from '../interfaces/Task'

interface Props {
    tasks : TASK[];
    beginTask(id: number): void;
    finishTask(id: number): void;
    deleteTask(id: number): void;
}

const TodoList : FunctionComponent<Props> = ({ tasks, beginTask, finishTask, deleteTask }) => {
    return (
        <div className="todo-wrapper">
            <h2>TODO</h2>
            {
                tasks.map((task: TASK, id: number) : any => (
                    (task.status === "todo") ?
                        <div
                            key={id}
                            className="task"
                        >
                            <h3>
                                { task.title }
                            </h3>
                            <h4>
                                { task.description }
                            </h4>
                            <button
                                onClick={ () => beginTask(task.id) }
                            >
                                Begin work
                            </button>
                            <button
                                onClick={ () => finishTask(task.id) }
                            >
                                Finish work
                            </button>
                            <button
                                className="delete"
                                onClick={ () => deleteTask(task.id) }
                            >
                                Delete
                            </button>
                        </div>
                    : null
                ))
            }
        </div>
    )
}

export default TodoList