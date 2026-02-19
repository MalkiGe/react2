import React from 'react'

const Message = () => {
  
  const  [curValue, setCurValue] =useSetStateWithLogging("")
  

const handleOnChange = (e) => {
   
    setCurValue(e.target.value)  
  }

  return (
    <>
    <div>Message</div>
    <input type="text" placeholder='insert yuor name' onChange={handleOnChange}/>
    <h1>{curValue}</h1>
    </>
  )
}

export default Message