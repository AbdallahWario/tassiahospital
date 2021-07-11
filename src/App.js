import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Faq } from './components/faq/Faq';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        
        <Navbar />
        <Switch>
           
          <Route path='/' exact component={Home} />
          <Route path='/faq' component={Faq} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
