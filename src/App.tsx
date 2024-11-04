import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './components/pages/About'
import Header from './components/Header'
import Project from './components/pages/Project'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<About />}
          />
          <Route
            path="/project"
            element={<Project />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
