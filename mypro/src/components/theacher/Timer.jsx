import { useEffect, useState } from "react"

const Timer = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Zippy")

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCount(prev => prev + 1)
    //         console.log("name is: ", name)
    //     },1000)
    //     return () => {
    //                 clearInterval(interval)
    //             }
    // },[name])

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev + 1)
            console.log("Timer is running")
        },1000)

        return () => {
            clearInterval(interval)
        }
    },[])

    return (
        <>
        <h1>Hello Timer</h1>
        <h2>Count is: {count}</h2>
        <h4>Hello {name}</h4>
        <button onClick={ () => setName("Sara")}>Change name</button>
        </>
    )
}

export default Timer

