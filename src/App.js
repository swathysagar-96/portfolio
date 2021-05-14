import './App.css';
import Header1 from "./components/Header1";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
function App() {
  return (
    
    <div>
      <Navbar/>
      <Header1/>
      <Contact/>
    </div>
    
  );
}

export default App;