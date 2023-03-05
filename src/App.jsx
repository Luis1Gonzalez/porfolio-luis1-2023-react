import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio"
import Header from "./shared/Header"
import { Routes, Route, BrowserRouter } from 'react-router-dom'



function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        
        <Route path='/' element={<Portfolio />}></Route>      
      <Route path="/aboutme" element={<AboutMe />}></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
