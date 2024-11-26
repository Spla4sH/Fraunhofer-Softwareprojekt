import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicketBox from './components/TicketBox'
import CreateTicketHeader from './components/CreateTicketHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <TicketBox />
    </div>
  )
}

export default App
