import React from 'react';
import SignUp from './dyncontent/SignUp';
import Login from './dyncontent/Login';
import CardContainer from "./dyncontent/Cards-component/CardContainer";
import cards from "./dyncontent/Cards-component/cardata"

export default class Dyncontent extends React.Component {
    render() {
        return (
            <div className="dynContent">
                <SignUp />
                <Login />
                <CardContainer cards ={cards}/>       
            </div>
        )
    }
}
