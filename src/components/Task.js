import {FaTimes} from 'react-icons/fa'
import '../index.css'

export default function Task({ task,deleteTask,toggleReminder }) {

    const handleDelete = () =>{
        console.log("Trying to handle delete")
        deleteTask(task.id);
    }

    return (
        <div className = {`${task.reminder ? 'task-reminder': 'task' }`}
        onDoubleClick = {()=>toggleReminder(task.id)} >
            <h3>  {task.text} <FaTimes style = {{color:'red', cursor:'pointer'}}
             onClick = {handleDelete}/></h3>
            <p>{task.day}</p>
        </div>

    )

}