import React, {Component} from 'react'

export default class Header extends Component {
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
                        <li><button className="btn btn-outline-success my-2 my-sm-0">Login</button></li>
                        <li><button className="btn btn-outline-success my-2 my-sm-0">Sign Up</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}
