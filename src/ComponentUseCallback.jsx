import { useState, useCallback} from "react"
import Todos from "./Todos";

export default function ComponentUseCallback() { 
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

    const increment = () => {
        setCount(count + 1)
    }

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"])
    },[])

    return (<>
        <Todos todos={todos} addTodo={addTodo} />
        <hr></hr>
        <div>
            Count: {count}
            <button onClick={increment}> + </button>
        </div>
    </>)
}