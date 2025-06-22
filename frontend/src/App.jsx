import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Menfess from "./pages/Menfess"
import Memory from "./pages/Memory"
import Test from "./pages/test"
import AboutUs from "./pages/AboutUs"
import Structure from "./pages/Structure"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/menfess" element={<Menfess />}></Route>
      <Route path="/memory" element={<Memory />}></Route>
      <Route path="/test" element={<Test />}></Route>
      <Route path="/about-us" element={<AboutUs />}></Route>
      <Route path="/structure" element={<Structure />}></Route>
    </Routes>
  )
}

export default App
