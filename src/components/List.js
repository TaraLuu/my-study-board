import React from 'react'

const List = ({tasks, handleDelete}) => {
  return (
    tasks.map(task => {
        return (
            <div key={task.id}>
                <p>{task.description}</p>
                <p>{task.level}</p>
                <p>{task.target}</p>
                <p>{task.id}</p>
                <button onClick={handleDelete}>Delete</button>
            </div>
        )
    })
  )
}

export default List