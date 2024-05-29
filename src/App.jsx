import './styles/App.css'
import HeadSection from './components/HeadSection'
import FooterSection from './components/Footer'
import { Outlet } from "react-router-dom";

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
