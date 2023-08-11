import { v4 as uuidv4 } from "uuid"
import { useState } from "react"

export default function TaskForm({onAddTask}) {
    const [taskName, setTaskName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [taskPriority, setTaskPriority] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        const newTask = {
            id: uuidv4(),
            taskName,
            startDate,
            endDate,
            taskPriority
        }
        onAddTask(newTask)
        setTaskName('')
        setStartDate('')
        setEndDate('')
        setTaskPriority('')
    }
  return (
    <form onSubmit={handleClick}>
        <input 
        type="text" 
        name="text" 
        placeholder="add a task"
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)}/>

        <label>Start date: </label>
        <input type="date" 
        name="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        />
       
       <label>End date: </label>
        <input type="date" 
        name="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        />

        <label>Priority: </label>
        <select name="priority" onChange={(e) => setTaskPriority(e.target.value)}>
          <option value="high">High</option>
          <option value="low">Low</option>
        </select>

        <button type="submit" className="pl-10">Create Task</button>
    </form>
  )
}

