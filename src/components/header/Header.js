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
            // <div className="header-div">
            //     <div className="logo">
            //         <img src="/image/logo.png" alt="CodeAsylum" width="200px" height="120px"/>
            //     </div>
            //     <div className="navBar">
            //         <ul>
            //             <li><button>Home</button></li>
            //             <li><button>About Us</button></li>
            //             <li><button>Contests</button></li>
            //             <li><button>Leaderboard</button></li>
            //         </ul>
            //     </div>
            //     <div className = "logSign">
            //         <ul>
            //             <li><button className="btn btn-outline-success my-2 my-sm-0" value={"login"} onClick={e => this.changeStatus(e, "value") }>Login</button></li>
            //             <li><button className="btn btn-outline-success my-2 my-sm-0" value={"signup"} onClick={e => this.changeStatus(e, "value")}>Sign Up</button></li>
            //         </ul>   
            //     </div>

            <div className="header-div">
                <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/"><img src="/image/logo.png" alt="CodeAsylum" width="180px" height="103px"/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="/"><b>Home</b><span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/"><b>About Us</b></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/"><b>Contests</b></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/"><b>Leaderboard</b></a>
                    </li>
                    </ul>
                    <button class="btn btn-outline-success my-2 my-sm-0" value={"login"} onClick={e => this.changeStatus(e, "value")}>Login </button>
                    <button class="btn btn-outline-success my-2 my-sm-0" value={"signup"} onClick={e => this.changeStatus(e, "value")}>SignUp</button>
                </div>
                </nav>
            </div>
        )
    }
}