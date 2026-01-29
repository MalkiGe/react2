import { useEffect } from "react"

const Scroller = () => {

    useEffect(() => {

        const handleScrolling = () => {
            console.log("im scrolling")
        }

        window.addEventListener("scroll", handleScrolling)
        return () => {
            window.removeEventListener("scroll", handleScrolling)
        }
    }, [])

    return (
        <>
       <h1>Hello Scroller</h1> 
       <div style={{backgroundColor:"red", height: "180vh"}}></div>
        </>
    )
}

export default Scroller