import React, { useEffect, Suspense, lazy } from "react";
import "./App.css";
// import Video from './components/video/Video';
import NavBar from "./components/navBar/NavBar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Profile from "./components/profile/Profile";
import Project from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  useEffect(() => {
    window.location.href = "https://jt-96.github.io/portfolio-v2/";
  }, []);

  const Video = lazy(() => import("./components/video/Video"));

  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center align-items-center vh-100">
          Loading...
        </div>
      }
    >
      <div className="App">
        <Video />
        <Intro />
        <NavBar />
        <About />
        <Profile />
        <Project />
        <Contact />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
