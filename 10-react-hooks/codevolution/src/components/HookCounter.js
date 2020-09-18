import React, {useState} from 'react'

function HookCounter() {

  // set initial variables & methods using useState hook
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count +1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter
