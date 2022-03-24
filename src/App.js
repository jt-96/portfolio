import './App.css';
import Video from './components/video/Video';
import NavBar from './components/navBar/NavBar';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Profile from './components/profile/Profile';
import Project from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <Video /> */}
      <Intro />
      <NavBar />
      <About />
      <Profile />
      <Project />
      <Contact />
      <Footer />
    </div >
  );
}

export default App;
