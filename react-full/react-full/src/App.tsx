import { useState } from 'react'

function App() {
  const [count, _setCount] = useState(0)

  return (
    <>
      <p>{count}</p>
    </>
  )
}

export default App
