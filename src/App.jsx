import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio"
import Header from "./shared/Header"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Projects from "./pages/Projects"
import ProjectDetails from "./pages/ProjectsDetails"
import { LenguageProvider } from "./context/LenguageProvider"



function App() {

  return (

    
      <BrowserRouter>

        <Header />
        <LenguageProvider>
        <Routes>

          <Route path='/' element={<Portfolio />}></Route>
          <Route path="/aboutme" element={<AboutMe />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path='/project/:id/:codeUrl' element={<ProjectDetails />}></Route>
        
        </Routes>
        </LenguageProvider>
      </BrowserRouter>
    

  )
}

export default App
