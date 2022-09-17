import React, {useState, useRef} from 'react'

const Pomodoro = () => {
  const [displayMessage, setMessage] = useState(false)
  const [hour,setHour] = useState([0])
  const [minute,setMinute] = useState([25])
  const [second,setSecond] = useState([0])

  const addHourRef = useRef()
  const addMinuteRef = useRef()
  const addSecondRef = useRef()

  function handleTimerChange(e) {
    const hour = addHourRef.current.value
    const minute = addMinuteRef.current.value
    const second = addSecondRef.current.value
    console.log(`${hour} and ${minute} and ${second}`)
    setHour(hour)
    setMinute(minute)
    setSecond(second)
    setMessage(()=>(
      displayMessage = !displayMessage
    ))
  }

  function handleMode(e) {

    switch(e.target.value) {
      case 1:
        setHour(0)
        setMinute(25)
        setSecond(0)
        break;
      case 2:
        setHour(0)
        setMinute(5)
        setSecond(0)
        break;
      case 3:
        setHour(0)
        setMinute(30)
        setSecond(0)
        break;
    }
  }

  return (
    <div className="pomodoro">
      <label>Pomodoro Timer</label>
        <button id="timer" value="1" onClick={handleMode}>Pomodoro</button>
        <button id="sbreak" value="2" onClick={handleMode}>Small Break</button>
        <button id="lbreak" value="3" onClick={handleMode}>Long Break</button>
        <div id="clock">
            <input id="hour" ref={addHourRef} onBlur={handleTimerChange} value={hour}></input>:
            <input id="minute" ref={addMinuteRef} onBlur={handleTimerChange} value={minute}></input>:
            <input id="second" ref={addSecondRef} onBlur={handleTimerChange} value={second}></input>
        </div>
        <button id="start">Start</button>
        <button id="pause">Pause</button>
        {displayMessage && <div>Keep Going! You can do this!</div>}
        <div id="history">Your Work History</div>
    </div>
  )
}

export default Pomodoro