import React, { FunctionComponent, useState, FormEvent } from 'react'

interface Props {
    addTask(task: string) : void;
}

const TaskForm: FunctionComponent<Props> = ({ addTask }) => {
    const [task, setTask] = useState<any>({
        title: "",
        description: ""
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setTask({
            ...task,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTask(task);
        task.title = "";
        task.description = "";
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={task.title}
                onChange={handleChange}
            />
            <textarea
                name="description"
                placeholder="Description"
                value={task.description}
                onChange={handleChange}
            >
            </textarea>
            <button disabled={!task.title || !task.description}
                type="submit"
            >
                New TODO
            </button>
        </form>
    )
}

export default TaskForm