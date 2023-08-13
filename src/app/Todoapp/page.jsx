"use client"
import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function Home() {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <main className="flex flex-col items-center justify-center bg-gray-100 py-10 px-4 md:pt-28 pt-20">
            <div className="w-full max-w-md p-4 md:p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-xl md:text-2xl font-semibold mb-4 text-center">Manage Your Hustle</h1>
                <TaskForm onAddTask={handleAddTask} /> 
                <TaskList tasks={tasks} />
            </div>
        </main>
    );
}
