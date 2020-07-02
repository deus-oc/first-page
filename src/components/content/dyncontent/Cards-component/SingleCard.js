import React, { Component } from 'react'

export default class SingleCard extends Component {
    render() {
        const {card} = this.props;
        return(
            <div className="singleCard" style={{backgroundImage: `url(${card.bgImg})`}}>
                {/* add a line bar colored  */}
                <div className="starts">
                    <h3>Starts</h3>
                    <span>{card.startDate}</span>
                </div>
                <div className="ends">
                    <h3>Ends</h3>
                    <span>{card.endDate}</span>
                </div>
                <div className="heading">
                    <h3>{card.heading}</h3>
                </div>
                <div className="cardContent">
                    <span>{card.cardContent}</span>
                </div>
            </div>
        )   
     }
}