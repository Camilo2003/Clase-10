import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cards from './assets/Componentes/Cards/Cards'
import VideoPlayerYoutube from './assets/Componentes/VideoPlayerYoutube/VideoPlayerYoutube'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Cards/>
    <VideoPlayerYoutube/>
    </>
  )
}

export default App
