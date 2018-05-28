import React, { Component } from 'react';
import logo from '../images/Logo_final.jpg';
import './Header.css';

class Header extends Component {
	render(){
		return(		
			<header className="header">
      			<img src={logo} className="header-logo" alt="logo"/>
    		</header>		
		)
	}
}
export default Header