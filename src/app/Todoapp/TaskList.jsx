import React from 'react';
import TaskItem from './TaskItem'; 

export default function TaskList({ tasks, onEditTask, onDeleteTask }) {
    return (
        <section>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onEditTask={onEditTask} 
                    onDeleteTask={onDeleteTask}
                />
            ))}
        </section>
    );
}

