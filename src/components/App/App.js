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
        <Header 
        signStatus={this.state} 
        changeInStatus={this.changeInStatus.bind(this)}/>
        <Content />
        {console.log("Before sending to DynContent state is ", this.state)}
        <DynContent status={this.state}/>
      </div>
    );
  
  }
}

export default App;
