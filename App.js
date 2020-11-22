import logo from './logo.svg';
import './App.css';
import Navbar from './componenets/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './componenets/Pages/Home'
import About from './componenets/Pages/About'
import Contact from './componenets/Pages/Contact'

function App() {
  return (
    <>
     <Router>
      <Navbar/>
      <Switch>
        <Route path = '/' exact component = {Home} /> 
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>

     </Router>
    
    </>
  );
}

export default App;
