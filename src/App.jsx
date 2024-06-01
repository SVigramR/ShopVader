import './styles/App.css'
import HeadSection from './components/HeadSection'
import FooterSection from './components/Footer'
import { Outlet } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('https://dummyjson.com/products')
  const [btnActive, setBtnActive] = useState("All")

  return (
    <>
      <HeadSection cart={cart} />
      <Outlet  context={{cart, setCart, category, setCategory, btnActive, setBtnActive}}/>
      <FooterSection />
    </>
  )
}

export default App
