import Task from './Task'

export default function Tasks({tasks,deleteTask,toggleReminder}){
    
        
    return(
        <div>
            {tasks.map(task => <Task key = {task.id} task = {task} 
            deleteTask = {deleteTask} toggleReminder = {toggleReminder}/>)}
        </div>
    )

}