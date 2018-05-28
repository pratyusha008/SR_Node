import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
	render(){
		return(
			<div className="footer-wrapper">
        		<footer className="footer">
          			<div className="footer-note">Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.  - Plato</div>
          			<a target="_blank" href="https://www.facebook.com/SruthiRanjaniOfficial"><i className="svg-icon facebook"></i></a>
				</footer>
      		</div>
		)
	}
}
export default Footer