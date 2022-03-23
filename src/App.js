import './App.css';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
