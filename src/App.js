import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Contactus from "./pages/Contactus";
import AboutUs from "./pages/Aboutus";
import Administration from "./pages/Administration";
import Courses from "./pages/Courses";
import Departments from "./pages/Departments";
import Welfare from "./pages/Welfare";
import Publications from "./pages/Publications";
function App() {
  return (
    <div className="App">

       <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="AboutUs" element={ <AboutUs/> } />
        <Route path="ContactUs" element={ <Contactus /> } />
        <Route path="Administration" element={ <Administration /> } />
        <Route path="Courses" element={ <Courses /> } />
        <Route path="Departments" element={ <Departments /> } />
        <Route path="Welfare" element={ <Welfare /> } />
        <Route path="Publications" element={ <Publications /> } />



      </Routes>
    </div>
  )
}

export default App