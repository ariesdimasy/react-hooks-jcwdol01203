import {  useReducer } from "react"

function reducer(state, action) {
    switch(action.type) { 
        case "increment" :
            return { count : state.count + 1 }
        case "decrement" :
            return { count : state.count  -1 }
        default :
            return state
    }
}

export default function ComponentUseReducer() {
    const [state, dispatch] = useReducer(reducer, {count : 0, name:'dimas'})
    const {count , name} = state

    const increment = () => {
        dispatch({ type: 'increment' })
    }

    const decrement = () => {
        dispatch({ type: "decrement" })
    }

    return(
        <div>
            <div>
                <button onClick={decrement}> - </button>
                Count : {count}
               
                <button onClick={increment}> + </button>
                <br></br>
                 Name:{name}
            </div>
        </div>
    )
}