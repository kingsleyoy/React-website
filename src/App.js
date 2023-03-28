import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Projects from "./Routes/Projects";



function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path='/projects' Component={Projects}/>
          <Route path="/about" Component={About}/>
          <Route path="/contact" Component={Contact}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
