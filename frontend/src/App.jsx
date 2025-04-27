import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import MenfessPage from "./pages/MenfessPage"
import MemoryPage from "./pages/MemoryPage"
import Test from "./pages/test"

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/menfess" element={<MenfessPage />}></Route>
      <Route path="/memory" element={<MemoryPage />}></Route>
      <Route path="/test" element={<Test />}></Route>
    </Routes>
  )
}

export default App
