import React, { Component } from 'react';

export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            confirmPass: ''
        };
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        //handle form processing here....
      }

    render() {
        const { fname, lname, email, password, confirmPass} = this.state;
        return (
            <div className="container">
                <form className="form-signup" onSubmit={this.onSubmit}>
                
                <h2 className="form-signup-heading">Sign Up</h2>
                <p className="texts">Please fill in this form to create an account</p>
                
                <div className="form-group">
                    <input type="text" name="fname" placeholder="First Name" value={fname} onChange={this.onChange} autoFocus/>
                    <span className="help-block"></span>
                </div>
                
                <div className="form-group">
                <input type="text" name="lname" placeholder="Last Name" value={lname} onChange={this.onChange} autoFocus/>
                    <span className="help-block"></span>
                </div>

                <div className="form-group">
                    <input type="text" name="email" className="form-control" placeholder="Email address" value={email} onChange={this.onChange} autoFocus />
                    <span className="help-block"></span>
                </div>

                <div className="form-group">
                    <input type="password" name="password" className="form-control" placeholder="Password" value={password} onChange={this.onChange} autoFocus />
                    <span className="help-block"></span>
                </div>
                
                <div className="form-group">
                <input type="text" name="confirmPass" placeholder="Confirm Password" value={confirmPass} onChange={this.onChange} autoFocus />
                    <span className="help-block"></span>
                </div>
                
                <input type="checkbox" name="terms"/><label htmlFor="terms"> I accept the Terms of Use &amp; Privacy Policy </label>                
                
                <button className="btn btn-lg btn-primary btn-block" type="submit" > Submit </button>
                
                </form>
            </div>
        );
      }
    }