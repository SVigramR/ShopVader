import './styles/App.css'
import HeadSection from './components/HeadSection'
import FooterSection from './components/Footer'
import { Outlet } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <HeadSection cart={cart} />
      <Outlet  context={[cart, setCart]}/>
      <FooterSection />
    </>
  )
}

export default App
