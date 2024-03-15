import Navbar from "./components/navbar"
import Home from "./components/home"
import Device from "./components/device"
import Footer from "./components/footer";
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/devices" element={<Device/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
