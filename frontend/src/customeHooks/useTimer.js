import React, {useState, useEffect} from 'react'

const useTimer = (inputTime) => {
    const currentTime = new Date(inputTime).getTime()
    const [timeCountDown, setCountDown] = useState()
  return (
    <div>useTimer</div>
  )
}

export default useTimer