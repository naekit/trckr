import { useState } from "react"

const AddTask = ({addTask}) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if(!text){
        alert('Please add task')
    }
    if(!day){
        alert('Please add date')
    }
    addTask({text, day, reminder})
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form onSubmit={onSubmit} className='add-form'>
        <div className="form-control">
            <label>Task</label>
            <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder='Add Task'/>
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input value={day} onChange={(e) => setDay(e.target.value)} type="text" placeholder='Add Day & Time'/>
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} type="checkbox"/>
        </div>
        <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  )
}

export default AddTask