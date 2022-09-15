import React, {useState, useRef} from 'react'
import uuidv4 from 'uuid/v4'

import React from 'react'

const LOCAL_STORAGE_KEY = 'Todo.list'

const Todolist = () => {
  const [todo, setTodo] = useState([])
  const descriptionRef = useRef()
  const completeRef = useRef()
  const targetRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTimer(storedTodos)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todo))
  },[todo])

  function handleAdd(e) {
    const description = descriptionRef.current.value
    const complete = completeRef.current.value
    const target = targetRef.current.value
    description.current.value = null

    setTimer(previousState => {
      return [...previousState,{id:uuidv4(), description:description, complete:complete, target:target}]
    })
  }

  return (
    <div>
      <input ref={descriptionRef}></input>
      <input ref={completeRef}></input>
      <input ref={targetRef}></input>
      <button onClick={handleAdd}></button>
      <button onClick={handleClear}></button>
      
    </div>
  )
}

export default Todolist