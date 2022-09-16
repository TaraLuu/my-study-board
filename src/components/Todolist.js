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
    const newTasks = [...tasks]
    const updateTasks = newTasks.filter(task => task.id === id)
    setTask(updateTasks)
    console.log(id)
  }

  return (
    <div className="Task">
      <input ref={descriptionRef} type="text"></input>
      <input ref={levelRef}></input>
      <input ref={targetRef}></input>
      <button onClick={handleAdd}>Add Task</button>
      <List tasks={tasks} handleDelete={handleDelete} />
      
    </div>
  )
}

export default Todolist