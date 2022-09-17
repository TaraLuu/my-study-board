import React from 'react'

const Task = ({task, handleDelete}) => {
    function handleClickDel() {
        handleDelete(task.id)
      }
  return (
    <div>
        <p>{task.description}</p>
        <p>{task.level}</p>
        <p>{task.target}</p>
        <p>{task.id}</p>
        <button onClick={handleClickDel}>Delete</button>
    </div>
  )
}

export default Task