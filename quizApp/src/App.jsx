import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PoliticalQuiz from './politicalQ/PoliticalQuiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PoliticalQuiz />
    </>
  )
}

export default App
