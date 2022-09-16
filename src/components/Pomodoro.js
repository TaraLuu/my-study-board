import React, {useState, useRef, useEffect} from 'react'

const LOCAL_STORAGE_KEY = 'Pomodoro.timer'

const Pomodoro = () => {
  const [displayMessage, setMessage] = useState(false)
  const [timer,setTimer] = useState([{
    hour: "00",
    minute: "25",
    second: "00"
  }])
  const addHourRef = useRef()
  const addMinuteRef = useRef()
  const addSecondRef = useRef()
  

  //add default value.

  //local storage
  useEffect(() => {
    const storedTimer = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTimer) setTimer(storedTimer)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(timer))
  },[timer])

  function handleTimerChange(e) {
    const hour = addHourRef.current.value
    const minute = addMinuteRef.current.value
    const second = addSecondRef.current.value
    console.log(`${hour} and ${minute} and ${second}`)
    
    setTimer((previousState)=>{
      return {...previousState,hour:hour, minute:minute, second:second}
    })
    setMessage(()=>(
      displayMessage = !displayMessage
    ))
  }

  function handleMode(e) {

    switch(e.target.value) {
      case 1:
        setTimer((previousState)=>{
          return [...previousState, {hour:0, minute:5, second:0}]
        });
        break;
      case 2:
        setTimer(()=>{
          return [{hour:0, minute:25, second:0}]
        });
        break;
      case 3:
        setTimer(()=>{
          return [{hour:0, minute:30, second:0}]
        });
        break;
      default:
        setTimer(()=>{
          return [{hour:0, minute:25, second:0}]
        });
    }
  }

  return (
    <div className="pomodoro">
        <button id="timer" value="1" onClick={handleMode}>Pomodoro</button>
        <button id="sbreak" value="2" onClick={handleMode}>Small Break</button>
        <button id="lbreak" value="3" onClick={handleMode}>Long Break</button>
        <div id="clock">
            <input id="hour" ref={addHourRef} onBlur={handleTimerChange}></input>:
            <input id="minute" ref={addMinuteRef} onBlur={handleTimerChange}></input>:
            <input id="second" ref={addSecondRef} onBlur={handleTimerChange}></input>
        </div>
        <button id="start">Start</button>
        <button id="pause">Pause</button>
        {displayMessage && <div>Keep Going! You can do this!</div>}
        <div id="history">Your Work History</div>
    </div>
  )
}

export default Pomodoro