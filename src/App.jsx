import { useState } from 'react'
import { Box } from '@mui/material';
import TicketBox from './components/TicketBox'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F2F7',
        height: '100vh',
      }}
    >
      <TicketBox />
    </Box>
  )
}

export default App
