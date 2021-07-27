import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState,useEffect} from 'react';
import AddTask from './components/AddTask'

function App() {
  const[showAddTask,setShowAddTask] = useState(false);

  const [tasks,setTasks] = useState([
    {
        id:1,
        text:'Dentist',
        day:'Monday',
        reminder:true
    },
    {
        id:2,
        text:'Doctor',
        day:'Tuesday',
        reminder:false
    },
    {
        id:3,
        text:'Massage',
        day:'Wednesday',
        reminder:true
    }
    ])

    const onAddTask = (task) => {
      const newTasks = [...tasks];
      var id = Math.max(...newTasks.map(task => task.id)) + 1
      const newTask = {id,...task}
      setTasks([...newTasks,newTask])
      }
       

    const deleteTask = (id)=>{
      setTasks(tasks.filter(task => task.id != id))
    }

    const toggleReminder = (id) =>{
        // Long but easy ot understand
      // const newTasks = [...tasks];
      // const task = newTasks.find(task => task.id===id)
      // task.reminder = !task.reminder;
      // setTasks(newTasks);

        // Short, but harder to understand..
        // If task.id === id, then we will return a specific object {}
        // If not, then we jsut return the task, unchanged
        // line 44 says "Take the task, copy(spread), but change the reminder"
        // to whatever the opposite of task.reminder is
        setTasks(tasks.map(task => task.id === id ? 
          {...task,reminder:!task.reminder}
          :task))
    }

    const onAdd = () =>{
      console.log(showAddTask)
        setShowAddTask(!showAddTask)
    }

  return (
    <div className='container'>
    <Header onAdd = {onAdd} showAddTask = {showAddTask}/>
    {showAddTask && <AddTask onAddTask = {onAddTask}/>}
    {tasks.length === 0 ? 'Nothing to see here' :
    <Tasks tasks = {tasks} deleteTask = {deleteTask} toggleReminder = {toggleReminder}/>}
    </div>
  );
}

export default App;
