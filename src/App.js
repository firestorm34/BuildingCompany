import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/Companies/Companies";
import "./App.css";
import Residencies from "./Components/Residencies/Residencies";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
    <div>
        <Header/>
        <Hero/>
    </div>
    <Companies/>
    <Residencies/>
    <Contact/>

    <Footer/>
    </div>

  );
}

export default App;
