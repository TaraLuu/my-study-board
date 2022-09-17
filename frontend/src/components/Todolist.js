import React, {useState, useRef, useEffect} from 'react'
import List from './List.js'
import {v4 as uuidv4} from 'uuid'


const LOCAL_STORAGE_KEY = 'Todolist.tasks'

const Todolist = () => {
  const [tasks, setTask] = useState([])
  const descriptionRef = useRef()
  const levelRef = useRef()
  const targetRef = useRef()

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTasks) setTask(storedTasks)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  },[tasks])

  function handleAdd(e) {
    const description = descriptionRef.current.value
    const level = levelRef.current.value
    const target = targetRef.current.value
    if (description === '') return
    setTask(previousState => {
      return [...previousState,{id:uuidv4(), description:description, level:level, target:target}]
    })

    descriptionRef.current.value = null
    levelRef.current.value = null
    targetRef.current.value = null
  }

  function handleDelete(id) {
    console.log(id)
    const newTasks = [...tasks]
    const updateTasks = newTasks.filter(task => task.id !== id)
    setTask(updateTasks)
  }

  return (
    <div className="Task">
      <label>To-Do List</label>
      Description: <input ref={descriptionRef} type="text"></input>
      Importance: <input ref={levelRef} list="levels" value="Normal"></input>
      <datalist id="levels">
        <option value="Normal">Normal</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </datalist>
      Date: <input ref={targetRef} type="date"></input>
      <button onClick={handleAdd}>Add Task</button>
      <List tasks={tasks} handleDelete={handleDelete} />
      
    </div>
  )
}

export default Todolist