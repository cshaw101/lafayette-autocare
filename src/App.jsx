import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ServiceDetails from "./pages/ServiceDetails"
import './App.css'
import Layout from "./components/Layout"

function App() {

  return (
    <BrowserRouter>
    <Layout>
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
     <Route path="/services/:serviceName" element={<ServiceDetails/>} />
      <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />

    </Routes>
    
    </Layout>
    </BrowserRouter>
  
     
  
  )
}

export default App
