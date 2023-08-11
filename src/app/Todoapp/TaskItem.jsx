import React, { useState } from 'react';

export default function TaskItem({ task, onEditTask, onDeleteTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState({ ...task });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onEditTask(editedTask);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    const handleDeleteClick = () => {
        onDeleteTask(task.id);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };

    if (isEditing) {
        return (
            <section>
                <input
                    type="text"
                    name="taskName"
                    value={editedTask.taskName}
                    onChange={handleInputChange}
                />
                <input
                    type="date"
                    name="startDate"
                    value={editedTask.startDate}
                    onChange={handleInputChange}
                />
                <input
                    type="date"
                    name="endDate"
                    value={editedTask.endDate}
                    onChange={handleInputChange}
                />
                <select
                    name="taskPriority"
                    value={editedTask.taskPriority}
                    onChange={handleInputChange}
                >
                    <option value="low">Low</option>
                    <option value="high">High</option>
                </select>
                <button onClick={handleSaveClick}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
            </section>
        );
    }

    return (
        <section>
            <h3>{task.taskName}</h3>
            <p>Start date: {task.startDate}</p>
            <p>End date: {task.endDate}</p>
            <p>Priority: {task.taskPriority}</p>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
        </section>
    );
}
