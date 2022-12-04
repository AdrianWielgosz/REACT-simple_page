import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Specialists from './components/Specialists';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
        <Navigation/>
        <About />
        <Specialists />
        <Services />
        <Footer />
      </div>
  );
}

export default App;
