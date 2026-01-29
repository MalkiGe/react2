import { useEffect } from "react"

const UseEffectDemo = () => {

    useEffect(() => {
        document.title = "Hello World"
    })

    return (
        <>
        <h1>hello useeffect demo</h1>
        </>
    )
}

export default UseEffectDemo