import React from 'react';
export default class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''        
        }
    };
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        //handle form processing here....
    }

    render() {
        const { email, password} = this.state;
        return (
        <div className="container">
            <form className="form-signin" onSubmit={this.onSubmit}>
            <h2 className="form-signin-heading"> Log In</h2>
            <div className="form-group">
                <input type="text" name="email" className="form-control" placeholder="Email address" value={email} onChange={this.onChange} autoFocus />
                <span className="help-block"></span>
            </div>
            <div className="form-group">
                <input type="password" name="password" className="form-control" placeholder="Password" value={password} onChange={this.onChange} />
                <span className="help-block"></span>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit" > Submit </button>
            </form>
        </div>
        );
    }
};
