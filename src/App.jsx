import { useRef, useState, useEffect } from 'react'
import './App.css'

function App() {
  //const [count, setCount] = useState(0);
  const count = useRef(0)
  const [title, setTitle] = useState("React")

  useEffect(() => {
   
    // if(count < 1) {
    //   setTitle("Component rendered again")
    // }

    // if(count == 5) {
    //   document.title = `You clicked ${count} times`
    // } 
    count.current += 1
    
  },[title])

  // const setCounter = () => {
  //   count.current = count.current + 1
  // }

  return (
    <>
     
      <h1 style={{ color:title }}> Title : {title} </h1>
      <div className="card">
        <button >
          count is {JSON.stringify(count)}
        </button>
        <input type="text" onChange={(e) => setTitle(e.target.value) } />
        <p>
          Component rendered { count.current }
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
