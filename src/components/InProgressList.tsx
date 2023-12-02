import React, { FunctionComponent } from 'react'
import TASK from '../interfaces/Task'

interface Props {
    tasks : TASK[];
    finishTask(id: number): void;
    deleteTask(id: number): void;
}

const InProgressList : FunctionComponent<Props> = ({ tasks, finishTask, deleteTask }) => {
    return (
        <div className="in-progress-wrapper">
            <h2>In progress</h2>
            {
                tasks.map((task: TASK, id: number) : any => (
                    (task.status === "in_progress") ?
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

export default InProgressList