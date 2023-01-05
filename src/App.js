import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([
    {
        "id": 1,
        "text": "test",
        "other": "no-show",
        "day": "monday",
        "reminder": true
      },
      {
        "text": "Test4",
        "day": "Wednesday",
        "reminder": false,
        "id": 3
      },
      {
        "text": "Task6",
        "day": "Thursday",
        "reminder": true,
        "id": 4
      }
  ])

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {...task, id}
    setTasks([...tasks, newTask])
  }

  // delete
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder}: task))
  }

  return (
    <div className="container">
      <Header title={"trckr"} setShow={() => setShowAdd(!showAdd)} showAdd={showAdd}/>
      {showAdd && <AddTask addTask={addTask} />}
      {
        tasks.length > 0 
          ? <Tasks onToggle={toggleReminder} onDelete={deleteTask} tasks={tasks}/>
          : "No tasks to show"
      }
    </div>
  );
}


export default App;