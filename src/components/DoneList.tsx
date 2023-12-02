import React, { FunctionComponent } from 'react'
import TASK from '../interfaces/Task'

interface Props {
    tasks : TASK[];
    deleteTask(id: number): void;
}

const DoneList : FunctionComponent<Props> = ({ tasks, deleteTask }) => {
    return (
        <div className="done-wrapper">
            <h2>Done</h2>
            {
                tasks.map((task: TASK, id: number) : any => (
                    (task.status === "done") ?
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

export default DoneList