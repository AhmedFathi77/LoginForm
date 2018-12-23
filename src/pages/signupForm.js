import React , {Component} from 'react';
import {Link} from 'react-router-dom';

class SignupForm extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
            username: '',
            password: '',
            EmailAdd: '',
            hasAgreed: false
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event){
        console.log(this.state);
        event.preventDefault();
    }
    handleChange(event){
        let name = event.target.name;
        let value = event.target.type === "checkbox"? event.target.checked : event.target.value;
        this.setState({
            [name]:value
        });
    }
     render(){
         return(
             <div className="FormCenter">
             <form onSubmit={this.handleSubmit} className="FormFields">
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="name">Full Name</label>
                    <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" value={this.state.username} onChange={this.handleChange} name="username" />
                  </div>
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" value={this.state.password} onChange={this.handleChange} name="password" />
                  </div>
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                    <input type="email" id="email" className="FormField__Input" placeholder="Enter your email"  value={this.state.EmailAdd} onChange={this.handleChange}  name="EmailAdd" />
                  </div>

                  <div className="FormField">
                    <label className="FormField__CheckboxLabel">
                        <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange}   /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                    </label>
                  </div>

                  <div className="FormField">
                      <button className="FormField__Button mr-20">Sign Up</button>
                      <Link exact to="/Signin" className="FormField__Link">I'm already member</Link>
                  </div>
                </form>
                <h1>Sign-in</h1>
             </div>
         );

     }
}
export default SignupForm