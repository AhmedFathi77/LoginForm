import React , {Component} from 'react';
import { Link } from 'react-router-dom';

class SigninForm extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
            email: ' ',
            password:''
        }
        this.HandelSubmit = this.HandelSubmit.bind(this);
        this.HandelChange = this.HandelChange.bind(this);
    }
    HandelSubmit(event){
        console.log('Your Name is: ' , this.state.email , 'Your password is: ' , this.state.password );
        event.preventDefault();
    }
    HandelChange(event){
        const names = event.target.name;
        const value = event.target.value;
        this.setState({
            [names]:value
        });
    }
    render(){
        return(
             <div className="FormCenter">
                <form className="FormFields" onSubmit={this.HandelSubmit}>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" value={this.state.email} onChange={this.HandelChange} name="email" />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" value={this.state.password} onChange={this.HandelChange} name="password"  />
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default SigninForm;