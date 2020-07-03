import React from 'react';
import './App.css'
import  Header  from "../header/Header";
import  Content  from "../content/Content";
import  DynContent  from "../content/Dyncontent";

class App extends React.Component{ 
  constructor(props){
    super(props);
    this.state = {
      SignUp: false,
      Login: false
    }
  }
  
  changeInStatus(signStatusVal){
    this.setState({
      Login: signStatusVal.Login,
      SignUp: signStatusVal.SignUp
    })
  }

  render(){
    return (
      <div className="App-body">
        <div class="container">
          <div className="row">
            <div className="col-sm">
            <Header 
            signStatus={this.state} 
            // changeInStatus to update the state for show/hide login/signup via it's child header and Dyncontent
            changeInStatus={this.changeInStatus.bind(this)}/>
            </div>
          </div>
          <div className="row">
          {console.log("Before sending to DynContent state is ", this.state)}
            <div className="col-7">
              <div className="content">
                <Content />
              </div>
            </div>
            <div className="col-5">
              <div className="DynContent">
                <DynContent status={this.state}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
