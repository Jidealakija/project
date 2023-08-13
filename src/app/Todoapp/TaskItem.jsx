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

    return (
        <section className="border rounded p-4 mb-4">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        name="taskName"
                        value={editedTask.taskName}
                        onChange={handleInputChange}
                        className="border rounded p-2 w-full mb-2"
                    />
                    <input
                        type="date"
                        name="startDate"
                        value={editedTask.startDate}
                        onChange={handleInputChange}
                        className="border rounded p-2 mb-2"
                    />
                    <input
                        type="date"
                        name="endDate"
                        value={editedTask.endDate}
                        onChange={handleInputChange}
                        className="border rounded p-2 mb-2"
                    />
                    <select
                        name="taskPriority"
                        value={editedTask.taskPriority}
                        onChange={handleInputChange}
                        className="border rounded p-2 w-full mb-2"
                    >
                        <option value="low">Low</option>
                        <option value="high">High</option>
                    </select>
                    <button
                        onClick={handleSaveClick}
                        className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-2 hover:bg-blue-600"
                    >
                        Save
                    </button>
                    <button
                        onClick={handleCancelClick}
                        className="bg-gray-400 text-white px-4 py-2 rounded w-full hover:bg-gray-500"
                    >
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <h3 className="text-lg font-semibold mb-2">{task.taskName}</h3>
                    <p>Start date: {task.startDate}</p>
                    <p>End date: {task.endDate}</p>
                    <p>Priority: {task.taskPriority}</p>
                    <div className="flex justify-between mt-2">
                        <button
                            onClick={handleEditClick}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Edit
                        </button>
                        <button
                            onClick={handleDeleteClick}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </>
            )}
        </section>
    );
}
