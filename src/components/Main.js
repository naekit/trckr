import { useState, useEffect } from "react"
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import Footer from "./Footer";

const Main = () => {
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
  // fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }


  // add task
  const addTask = async (task) => {
    const res = await fetch(
      `http://localhost:5000/tasks`, 
      { 
        method: 'POST', 
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task) 
      }
    )
    const data = await res.json()
    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = {...task, id}
    // setTasks([...tasks, newTask])
  }

  // delete
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })

    setTasks(tasks.filter(task => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = async(id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(
      `http://localhost:5000/tasks/${id}`, 
      { method: 'PUT' ,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    const data = await res.json()

    setTasks(tasks.map(task => task.id === id ? {...task, reminder: data.reminder}: task))
  }

  return (
      <>
        <Header title={"trckr"} setShow={() => setShowAdd(!showAdd)} showAdd={showAdd}/>
        {showAdd && <AddTask addTask={addTask} />}
        {
          tasks.length > 0 
            ? <Tasks onToggle={toggleReminder} onDelete={deleteTask} tasks={tasks}/>
            : "No tasks to show"
        }
        <Footer />
      </>
  );
}


export default Main;