import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Home from "./routes/Home.js";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Footer from "./components/footer/Footer";
import Error from "./routes/Error";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="*" element={<Error />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
