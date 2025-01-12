import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner  from './components/Banner';
import Oferta from './components/Oferta';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Oferta></Oferta>
    </>
  )
}

export default App
