import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Bulb from './components/Bulb'

function App() {
  const [turnOn, setTurnOn] = useState('off')

  const handleClick = () => {
    if(turnOn === 'on'){
      setTurnOn('off')
    } else {
      setTurnOn('on')
    }
  }

  return (
    <div className="App">
      <Bulb turnOn={turnOn} handleClick={handleClick} />
      <Bulb turnOn={turnOn} handleClick={handleClick} />
      <Bulb turnOn={turnOn} handleClick={handleClick} />
    </div>
  )
}

export default App
