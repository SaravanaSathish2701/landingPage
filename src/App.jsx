import "./App.css";
import Features from "./components/Features.jsx";
import ImageFeatures from "./components/ImageFeatures.jsx";
import Peoples from "./components/Peoples.jsx";
import Section from "./components/Section.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className="container">
        <h2 className="start">Start Bootstrap</h2>
        <span></span>
        <h3 className="sign">Sign Up</h3>
      </div>
      <div>
        <Header />
        <br />
        <Features />
        <br />
        <ImageFeatures />
        <br />
        <div className="head">
          <h3>What people are saying!</h3>
        </div>
        <Peoples />
        <br />
        <Section />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default App;
