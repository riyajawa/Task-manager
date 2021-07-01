import React from 'react'
import Heading from './Components/Header'
import Tasks from './Components/Tasks'
import { useState } from 'react';
import AddTask from './Components/AddTask';



function App() {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([])
//Delete task

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}
//toggle remainder
const toggleReminder = (id) => {
 setTasks(
   tasks.map((task) => task.id === id ? {...task,reminder : !task.reminder} : task ))
}
 //add task

const addTask=(task) => {
  const id = Math.floor(Math.random() * 10000)+1
  const newTask = {id,...task}
  setTasks([...tasks,newTask])

}

  return (
    <div className="container">
     <Heading onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length>0 ? <Tasks tasks ={tasks} onDelete = {deleteTask} 
       onToggle ={toggleReminder}
     />: ('No task')}
    </div>
  );
}

export default App;
