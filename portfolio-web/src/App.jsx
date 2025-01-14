import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner  from './components/Banner';
import Oferta from './components/Oferta';
import Realizacje from './components/Realizacje';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Oferta></Oferta>
      <Realizacje></Realizacje>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
