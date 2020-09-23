import React, { useState, useEffect } from 'react'

function HookIntervalCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    // cleanup
    return () => {
      clearInterval(interval)
    }
    // dependency list of variables
  }, [count])

  return (
    <div>
      {count}
    </div>
  )
}

export default HookIntervalCounter
