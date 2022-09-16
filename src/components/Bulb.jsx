import React from 'react'

const Bulb = ({turnOn, handleClick}) => {

  return (
    <div>
      <div className={`bulb ${turnOn}`}></div>
      <button onClick={handleClick}>On/Off</button>
    </div>
  )
}

export default Bulb