import './App.css';
import AboutPizza from './components/AboutPizza';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PizzaTypes from './components/PizzaTypes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <AboutPizza title="Pizza is awesome"/>
      <PizzaTypes title='Pizza Types'/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
