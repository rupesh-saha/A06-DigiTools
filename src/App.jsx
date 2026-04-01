import { useState } from 'react'
import './App.css'
import HeroCover from './components/HeroCover/HeroCover'
import NavBar from './components/NavBar/NavBar'
import ToggleSection from './components/ToggleSection/ToggleSection'



function App() {
  const [toggle, setToggle] = useState("product");

  return (
    <>
      <NavBar></NavBar>
      <HeroCover></HeroCover>
      <ToggleSection toggle={toggle} setToggle={setToggle}></ToggleSection>

    </>
  )
}

export default App
