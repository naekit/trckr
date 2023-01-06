import {FaInfo, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div onDoubleClick={() => onToggle(task.id)} className={`task ${task.reminder ? 'reminder': ''}`}>
        <h3>
            {task.text} 
            <FaTimes onClick={() => onDelete(task.id)} style={{ color: 'red' }} />
        </h3>
        <p className='details'>{task.day}         <Link to={`/task/${task.id}`}><FaInfo /></Link></p>
    </div>
  )
}

export default Task