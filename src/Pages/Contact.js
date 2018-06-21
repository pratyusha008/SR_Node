import React, { Component } from 'react';
import './Contact.css';
import callicon from '../images/call_black.png';
import mailicon from '../images/mail_black.png';

class Contact extends Component{

	constructor(props){
		super(props);
		this.onChangeVal = this.onChangeVal.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
			name : '',
			num:'',
			query:''
		}
	}

	onChangeVal(e){
		this.setState({
			[e.target.name]: e.target.value
		})
	}


	onSubmit(e){
		e.preventDefault();
		let nameVal = this.state.name;
		let phVal = this.state.num;
		let queryVal = this.state.query;
		console.log("Name is "+nameVal);
		console.log("PhNum is "+phVal);
		console.log("Query is "+queryVal);
		this.state = {
			name : '',
			num:'',
			query:''
		}
	}

	render(){
		return(
			<div className="content-wrapper clearfix">
				<div className="reachus-wrapper float-xl-left">
	            	<div className="icons callus clearfix">
	            		<img className="float-left" src={callicon}/>
	            		<div className="float-left icons-text">
	            			<div>+918500262906</div>
	            			<div>+918179974003</div>
	            		</div>
	            	</div>
	            	<div className="icons emailus clearfix">
	            		<img className="float-left" src={mailicon}/>
	            		<div className="float-left icons-text">enquiry.sruthiranjani@gmail.com</div>
	            	</div>
	            </div>
				<div className="contactpage-wrapper float-xl-right">
	                <h3 className="medium-head">Reach Out To Us!</h3>
	                <p>Got a Question? Are you interested to learn more? Are you curious about what learning Music can do? Contact Us!! 
	                We will respond to you as soon as possible</p>
	                <form onSubmit={this.onSubmit}>
	                    <div className="form-group">
	                        <label>Name:  </label>
	                        <input type="text" name="name" className="form-control" onChange={this.onChangeVal}/>
	                    </div>
	                    <div className="form-group">
	                        <label>Phone Number: </label>
	                        <input type="text" name="num" className="form-control" onChange={this.onChangeVal}/>
	                    </div>
	                    <div className="form-group">
	                        <label>Your Query: </label>
	                        <textarea type="text" rows="5" name="query" className="form-control" onChange={this.onChangeVal}/>
	                    </div>
	                    <div className="form-group">
	                        <input type="submit" value="Submit" className="btn btn-primary submit-btn"/>
	                    </div>
	                </form>
	            </div>

	            
			</div>
		)
	}
}

export default Contact

