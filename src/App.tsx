/* In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from. You also need to update the Route declaration - <Route path='/welcome' element={<Home/>} />  https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom*/ 
import {useState} from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/home/Home"
import Socials from "./components/socials/Socials"
import Header from "./components/header/Header"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"

const App:React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMobileMenu = function(){
    setShowMobileMenu(!showMobileMenu)
  };

  const closeMobileMenu = function(){
    setShowMobileMenu(false)
  };

  return (
    <>
      <Router>
        <Header 
          toggleMobileMenu={toggleMobileMenu}
          showMobileMenu={showMobileMenu}
          closeMobileMenu={closeMobileMenu}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
          <Socials />
      </Router>     
    </>
  )
}

export default App;