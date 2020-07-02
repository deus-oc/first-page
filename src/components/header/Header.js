import React, {Component} from 'react'

export default class Header extends Component {
    
    changeStatus(e){
        const status = {
            Login: false,
            SignUp:false
        }
        if(e.target.value === "login"){
            status.Login = true;
            status.SignUp = false
        }
        else{
            status.SignUp = true;
            status.Login = false
        } 
        this.props.changeInStatus(status);            
    }
    
    render(){
        return (
            <div className="header-div">
                <div className="logo">
                    <img src="/image/logo.png" alt="CodeAsylum"/>
                </div>
                <div className="navBar">
                    <ul>
                        <li><button>Home</button></li>
                        <li><button>About Us</button></li>
                        <li><button>Contests</button></li>
                        <li><button>Leaderboard</button></li>
                    </ul>
                </div>
                <div className = "logSign">
                    <ul>
                        <li><button className="btn btn-outline-success my-2 my-sm-0" value={"login"} onClick={e => this.changeStatus(e, "value") }>Login</button></li>
                        <li><button className="btn btn-outline-success my-2 my-sm-0" value={"signup"} onClick={e => this.changeStatus(e, "value")}>Sign Up</button></li>
                    </ul>   
                </div>
            </div>
        )
    }
}
