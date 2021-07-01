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
  return (
    <div className="container">
     <Heading />
     <Tasks tasks ={tasks}/>
    </div>
  );
}

export default App;
