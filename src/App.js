import './App.css';
import NavBar from './components/navBar/NavBar';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Profile from './components/profile/Profile';
import Project from './components/projects/Projects';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      <Profile />
      <Project />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
