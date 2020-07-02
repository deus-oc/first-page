import React from 'react';
import SignUp from './dyncontent/SignUp';
import Login from './dyncontent/Login';
import CardContainer from "./dyncontent/Cards-component/CardContainer";
import cards from "./dyncontent/Cards-component/cardata"

export default class Dyncontent extends React.Component {
    render() {
        const status  = this.props.status;
        console.log("state in DynContent", status);
        return (
            <div className="dynContent">
                {status.SignUp && <SignUp />}
                {status.Login && <Login />}
                <CardContainer cards ={cards}/>       
            </div>
        )
    }
}
