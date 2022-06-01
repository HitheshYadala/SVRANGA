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
import Adminlogin from "./pages/Adminlogin";
import PhotoGallary from "./pages/PhotoGallary";
import Readmoredean from "./pages/Readmoredean";

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
        <Route path="adminlogin" element = {<Adminlogin />} />
        <Route path="photogallary" element = {<PhotoGallary />} />
        <Route path="readmoredean" element = {<Readmoredean />} />

        

      </Routes>
    </div>
  )
}
// 3c8d33a6cf5fdcc key
// b020ce98d33d51f secret
export default App