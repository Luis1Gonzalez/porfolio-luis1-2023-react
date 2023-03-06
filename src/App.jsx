import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio"
import Header from "./shared/Header"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Projects from "./pages/Projects"



function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        
        <Route path='/' element={<Portfolio />}></Route>      
      <Route path="/aboutme" element={<AboutMe />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
