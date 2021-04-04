import React from 'react';
import './card-view.css';
import {spade, club, heart, diamond} from '../types/card-types';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../cards', false, /\.(png|jpe?g|svg)$/));

export class CardView extends React.Component
{
    constructor(props)
    {
        super(props);
        this.convertToChar = this.convertToChar.bind(this);
    }

    convertToChar()
    {
        switch(this.props.card.suite)
        {
            case spade:
                return "S";
            case diamond:
                return "D";
            case heart:
                return "H";
            case club:
                return "C";
        }
    }


    // TODO: Fix the damn view to look like real card and not sticks!!!!!
    render()
    {
        const cardSuite = this.convertToChar();
        return (
            <img src={images[`${this.props.card.face}${cardSuite}.png`].default} height="300px" alt="logo" />
        );
        // var cardColor  = this.props.card.suite === spade || this.props.card.suite === club ? "base-card black-card" : "base-card red-card";
        // return (
        //     <div className={cardColor}>
        //         <div className="top-number">{this.props.card.face}</div>
        //         <span >{this.props.card.suite}</span>
        //         <div className="bot-number">{this.props.card.face}</div>
        //     </div>
        // );
    }
}

export default CardView;