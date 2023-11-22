import { useRef, useEffect } from "react"
import './App.css'

export default function ComponentUseRef() { 

    const inputRef = useRef(null) 
    
    useEffect(() => {
        inputRef.current.focus()
    },[])

    return(<div className="card">
        <input type="text" ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>
            Focus 
        </button>
    </div>)

}