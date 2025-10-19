import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Menfess from "./pages/Menfess";
import AboutUs from "./pages/AboutUs";
import Structure from "./pages/Structure";
import Schedule from "./pages/Schedule";
import NotFound from "./pages/NotFound";
import Memories from "./pages/Memories";
import Test from "./pages/Test";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menfess" element={<Menfess />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/structure" element={<Structure />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/memories" element={<Memories />}></Route>
        <Route path="/menfess" element={<Menfess />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
