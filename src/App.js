import React from 'react'
import Heading from './Components/Header'
import Tasks from './Components/Tasks'
import { useState } from 'react';



function App() {
  const [tasks,setTasks] = useState(
    [
        {
            id:1,
            text:'heybaby',
            day : 'Feb 5Th',
            reminder : true
        },
        {
            id:2,
            text:'hey baby',
            day : 'Feb 6Th',
            reminder : true
        },
        {
            id:3,
            text:'hey girl',
            day : 'Feb 7Th',
            reminder : false
        }
    ]
)
//Delete task

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}

  return (
    <div className="container">
     <Heading />
     <Tasks tasks ={tasks} onDelete = {deleteTask}/>
    </div>
  );
}

export default App;
