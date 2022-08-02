import "./App.css"
import Intro from "./components/into/Intro"
import NavBar from "./components/NavBar/NavBAr"
import Portfolio from "./components/portfolio/Portfolio"
import Services from "./components/services/Services"

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Intro/>
      <Services/>
      <Portfolio/>
    </div>
  )
}

export default App
