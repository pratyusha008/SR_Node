import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="content">
        	<div className="menu-bar">
        		<ul>
        			<li><Link to="/">Home</Link></li>
        			<li><Link to="/about">About Us</Link></li>
        			<li><Link to="/contact">Contact Us</Link></li>
        		</ul>
        	</div>
        	<div className="main-content">
        		<Route exact path="/" component={Home}/>
        		<Route exact path="/about" component={About}/>
        		<Route exact path="/contact" component={Contact}/>
        	</div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
