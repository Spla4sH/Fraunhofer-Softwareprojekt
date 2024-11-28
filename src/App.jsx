import { useState } from 'react'
import './App.css'
import TicketBox from './components/TicketBox'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <TicketBox />
    </div>
  )
}

export default App
