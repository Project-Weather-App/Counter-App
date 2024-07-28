import React, {useState} from 'react'

function App() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => setCount(count + 1)

    const handleDecrement = () => {
        if(count > 0){
            setCount(count -1)
        }
    }
  return (
    <div className="container">
        <h1>Counter App</h1>

        <span>{count}</span>

        <div className='btn-group'>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
        
    </div>
  )
}

export default App