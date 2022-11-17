import React, {useState, useEffect} from 'react'

const useTimer = (inputTime) => {
    const currentTime = new Date(inputTime).getTime()
    const [timeCountDown, setCountDown] = useState(
      currentTime - new Date().getTime()
    )

    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(currentTime - new Date().getTime())
      }, 1000)
      return ()=> clearInterval(interval)
    }, [currentTime])

  return getReturnValues(timeCountDown)
}

const getReturnValues = (timeCountDown) => {
  const hours = Math.floor((timeCountDown % (1000*60*60*24))/(1000*60*60))
  const minutes = Math.floor((timeCountDown % (1000*60*60))/(1000*60))
  const seconds = Math.floor((timeCountDown % (1000*60))/1000)
  return [hours, minutes, seconds]
}

export default {useTimer}