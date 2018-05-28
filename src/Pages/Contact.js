import React, { Component } from 'react';
import './Contact.css';

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
	}

	render(){
		return(
			<div className="content-wrapper">
				<div className="contactpage-wrapper">
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
	                        <textarea type="text" name="query" className="form-control" onChange={this.onChangeVal}/>
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

