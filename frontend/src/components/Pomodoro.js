import React, {useState, useRef} from 'react'
import {useTimer} from '../customeHooks/userTimer.js'

const Pomodoro = ({useTimer}) => {

  const [hour,setHour] = useState([0])
  const [minute,setMinute] = useState([25])
  const [second,setSecond] = useState([0])

  const addHourRef = useRef()
  const addMinuteRef = useRef()
  const addSecondRef = useRef()

  function handleStart() {
    const hour = addHourRef.current.value
    const minute = addMinuteRef.current.value
    const second = addSecondRef.current.value
    const count = (hour*60) + (minute*60) + (second*1000)
    console.log(`${count}`)
  }


  return (
    <div className="pomodoro">
      <label>Pomodoro Timer</label>
        {/* <button id="timer" value="1" onClick={handleMode}>Pomodoro</button>
        <button id="sbreak" value="2" onClick={handleMode}>Small Break</button>
        <button id="lbreak" value="3" onClick={handleMode}>Long Break</button> */}
        <div id="clock">
            <input id="hour" ref={addHourRef} value={hour}></input>:
            <input id="minute" ref={addMinuteRef} value={minute}></input>:
            <input id="second" ref={addSecondRef} value={second}></input>
        </div>
        <button id="start" onClick={handleStart} >Start</button>
        <button id="pause">Pause</button>
        <div id="display"></div>
    </div>
  )
}

export default Pomodoro