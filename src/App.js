import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AllRoute from './Components/AllRoute';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Slider from './Pages/Slider';

function App() {
  return (

    <div className="w-full">
        {/* <Navbar/> */}
        <AllRoute/>  
      {/* <Footer/>   */}
      {/* <Home/> */}
      {/* <Contact/> */}
      {/* <Slider/> */}
    </div>
    
  );
}

export default App;
