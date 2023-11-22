import useCounter from "./hooks/counterHooks"

export default function CustomHooks(props) {

    const [count, increment, decrement] = useCounter(0,props.step ? props.step : 1)

    return(<div>
        <h1>{count}</h1>
       
        <button onClick={decrement}> Decrement </button>
        <button onClick={increment}> Increment </button>
    </div>)
}