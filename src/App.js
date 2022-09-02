import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Skills from './containers/skills';
import Resume from './containers/resume';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import NavBar from './components/navBar';
import Theme from './components/theme';
import particlesConfig from './helpers/particlesConfig';

function App() {
  const particlesInit = async (main) => {
    await loadFull(main)
  }
  const location = useLocation(); //useLocation function returns the path of the page
  const renderParticlesJsIfCurrentPageIsHome = location.pathname === '/'; //setting the path into a variable

  return (
    <div className="App">
      {/*particles*/}
      {renderParticlesJsIfCurrentPageIsHome && ( //using AND operator as conditional, if and only if all the operators are true it will return true
        <Particles id='particles' options={particlesConfig} init={particlesInit} />
      )}
      <div className='App__navbar-wrapper'>
        {/*navBar component*/}
        <NavBar />
      </div>
        {/*main page content*/}
      <div className='App__main-content-wrapper'>
        {/*Themes component*/}
        <Theme />
        <Routes>
          {/* create all routes */}
          <Route path='/' index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
