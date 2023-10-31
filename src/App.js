import './App.css';
import About from './component/About';
import Blog from './component/Blog';
import Home from './component/Home';

import Navbar from './component/Navbar';
import Products from './component/Products';
import Services from './component/Services';

function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Services/>
    <About/>
    <Products/>
    <Blog/>
    </div>
  );
}

export default App;
