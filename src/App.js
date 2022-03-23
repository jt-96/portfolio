import './App.css';
import NavBar from './components/navBar/NavBar';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
