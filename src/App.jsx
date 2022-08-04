import { useRef } from "react"
import Intro from "./components/into/Intro"
import NavBar from "./components/NavBar/NavBar"
import Portfolio from "./components/portfolio/Portfolio"
import Services from "./components/services/Services"
import Contact from "./components/contact/Contact"
import "./App.css"
import Footer from "./components/footer/Footer"

function App() {
  const services = useRef(null)
  const portfolio = useRef(null)
  const contact = useRef(null)
  const intro = useRef(null)

  return (
    <div className='App'>
      <NavBar
        services={services}
        portfolio={portfolio}
        contact={contact}
        intro={intro}
      />
      <Intro
      innerRef={intro} />
      <Services
        innerRef={services} />
      <Portfolio
        innerRef={portfolio} />
      <Contact
      innerRef={contact} />
      <Footer/>
    </div>
  )
}

export default App
