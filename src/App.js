import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Projects from './views/Projects'
import Contact from './views/Contact'
import ErrorPage from './views/ErrorPage'
import Navbar from './components/Navbar';
import ProjectsGames from './components/ProjectsGames'
import ProjectsApps from './components/ProjectsApps'

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects" element={<Projects/>}>
        <Route path="Games" element={<ProjectsGames />} />
        <Route path="Apps" element={<ProjectsApps />} />
      </Route>
      <Route path="contact" element={<Contact/>} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </div>
  );
}

export default App;
