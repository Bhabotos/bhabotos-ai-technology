import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import Training from './pages/Training'
import Solutions from './pages/Solutions'
import Projects from './pages/Projects'
import CourseOutline from './pages/CourseOutline'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg">
        <Navbar />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<Training />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses/:courseId" element={<CourseOutline />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
