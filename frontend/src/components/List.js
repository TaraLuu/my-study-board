import React from 'react'
import Task from './Task.js'


const List = ({tasks, handleDelete}) => {

  return (
    tasks.map(task => {
        return (
            <Task key={task.id} handleDelete={handleDelete} task={task}/>
        )
    })
  )
}

export default List