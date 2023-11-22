import { createContext, useContext } from "react"

const UserContext = createContext()

export default function Component1() {
    return(<div style={{ border: '1px solid blue', padding: 5}}>
        <UserContext.Provider value={{ name:'dimas', age:25}}>
            <p> Component 1 : </p>
            <Component2 name='dimas' age={27} address='tangerang' />
        </UserContext.Provider>
    </div>)
}

function Component2(props) {
    // {name:'dimas', age:27, address:'tangerang'}
    const { name , address } = props
    // const name = props.name
    // const address = props.address
    const user = useContext(UserContext)
    return (<div style={{ border: '1px solid red' , padding: 5}}>
        <p> Component 2 : {user.name}</p>
        <p>{JSON.stringify(props)}</p>
        <p>name : {name}</p>
        <Component3 />
    </div>)
}

function Component3() { 

    return (<div style={{ border: '1px solid brown', padding: 5}}>
        <p> Component 3 : </p>
        <Component4 />
    </div>)

}

function Component4() { 

    const user = useContext(UserContext)

    return (<div style={{ border: '1px solid green'}}>
        <p> Component 4 : </p>
        Name : {user.name} <br></br>
        Age : {user.age}
    </div>)

}

