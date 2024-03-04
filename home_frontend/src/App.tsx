import Navbar from "./components/navbar"
import Home from "./components/home"
import Device from "./components/device"
import { useState } from "react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [selectedPage, setSelectedPage] = useState("home")
  return (
    <>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/devices" element={<Device/>}></Route>
      </Routes>
    </>
  )
}

export default App
