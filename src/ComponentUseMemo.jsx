import { useState, useMemo } from "react"

export default function ComponentUseMemo() { 
    const [number, setNumber] = useState(0)
    const [count, setCount] = useState(0)

    const incrementNumber = () => setNumber((number) => number + 1)
    const incrementCount = () => setCount((count) => count + 1)

    const isNumberEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) {
            i++
        }
        return number % 2 === 0
    },[number])

    return (<div>
        <button onClick={incrementNumber}>
            number : {number}
        </button>
        <div>{isNumberEven ? "even" : "odd"}</div>
        <button onClick={incrementCount}>count : {count}</button>
    </div>)
}