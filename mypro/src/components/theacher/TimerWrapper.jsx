import { useState } from "react"
import Timer from "./Timer"

const TimerWrapper = () => {
    const [isDisplayTimer, setIsDisplayTimer] = useState(true)
    return(
        <div>
            <button onClick={() => setIsDisplayTimer(!isDisplayTimer)}>Set Display Timer</button>
            {isDisplayTimer  && <Timer/> }
        </div>
    )
}

export default TimerWrapper