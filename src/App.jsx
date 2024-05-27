import './App.css'
import HeadSection from './components/HeadSection'
import HomePage from './Home'
import FooterSection from './components/Footer'
import { Outlet } from "react-router-dom";
import ShopPage from './shop'

function App() {

  return (
    <>
      <HeadSection />
      <Outlet />
      <FooterSection />
    </>
  )
}

export default App
