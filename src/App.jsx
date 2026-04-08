import { useState } from 'react'
import './App.css'
import HeroCover from './components/HeroCover/HeroCover'
import NavBar from './components/NavBar/NavBar'
import ToggleSection from './components/ToggleSection/ToggleSection'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import GetStarted from './components/GetStarted/GetStarted'
import Subscriptions from './components/Subscriptions/Subscriptions'


function App() {
  const [toggle, setToggle] = useState("product");
  const [cart, setCart] = useState([]);

  return (
    <>
      <NavBar cart={cart}></NavBar>
      <HeroCover></HeroCover>
      <ToggleSection toggle={toggle} setToggle={setToggle} cart={cart}></ToggleSection>
       
      {toggle === "product" 
      ? (  <Cards cart={cart} setCart={setCart}/> ) 
      : (  <Cart cart={cart} setCart={setCart}/> )
      }

      <GetStarted></GetStarted>
      <Subscriptions></Subscriptions>
    </>
  )
}

export default App
