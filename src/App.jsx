import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Suite from './components/Suite'
import Suite1 from './components/Suite1'
import About from './components/About'
import Contact from './components/Contact'
import Dining from './components/Dining'
import Experiences from './components/Experiences'

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/suites' element={<Suite />} />
        <Route path='/suites/:propertyName' element={<Suite1 />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dining' element={<Dining />} />
        <Route path='/experience' element={<Experiences />} />
        <Route path='/experiences' element={<Experiences />} />
      </Routes>
    </Router>
  )
}

export default App
