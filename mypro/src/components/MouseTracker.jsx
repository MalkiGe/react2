import { useEffect, useState } from "react"


const MouseTracker = () => {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    useEffect(() => {
        const handleMoving = (event) => {
            setX(event.clientX)
            setY(event.clientY)

        }
        window.addEventListener("mousemove", handleMoving)
        return () => {
            window.removeEventListener("mousemove", handleMoving)
        }
    }, [])

    return (
        <>
            <h1>Hello</h1>
            <p>  position x: {X} position y: {Y}</p>
        </>
    )
}

export default MouseTracker
