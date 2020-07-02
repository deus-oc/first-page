import React, { Component } from 'react';
import SingleCard from './SingleCard';

export default class CardContainer extends Component {
    render() {
        const { cards } = this.props;
        console.log(cards);
        return (
            <div className="cardcontainer">
                <div className="card-header">
                    <h1>Trending Challenges</h1>
                </div>
                <div className="cards">
                    {cards.map((card) => {
                        return(
                            <SingleCard key={card.id} card={card}/>
                        )    
                    })}
                </div>
            </div>
        )
    }
}
