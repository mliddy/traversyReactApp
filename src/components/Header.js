import {Component} from 'react';
import Button from './Button'
export default function Header({title,onAdd,showAddTask}){


    return(
            <header className = 'header'>
                <h1>{title}</h1>
               <Button onClick = {onAdd} color= {showAddTask ? 'red':'green'} name= {showAddTask ? 'Close':'Add'}/> 
              
            </header>
    )
}

Header.defaultProps = {
    title:'Task Tracker'
}

