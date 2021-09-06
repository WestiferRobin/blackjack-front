import React from 'react';
import './card-view.css';
import {spade, club, heart, diamond} from '../types/card-types';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => ( images[item.replace('./', '')] = r(item)));
    return images;
  }
  
  const images = importAll(require.context('../cards', false, /\.(png|jpe?g|svg)$/));

export class CardView extends React.Component
{
    constructor(props)
    {
        super(props);
        this.convertToChar = this.convertToChar.bind(this);
        this.state = {hidden: this.props.isHidden, card: this.props.card};
    }

    convertToChar()
    {
        switch(this.state.card.suite)
        {
            case spade:
                return "S";
            case diamond:
                return "D";
            case heart:
                return "H";
            case club:
                return "C";
            default:
                return null;
        }
    }

    render()
    {
        if (this.state.hidden)
        {
            return ( <img onClick={() => this.setState({hidden: !this.state.hidden, card: this.state.card})} src={images["red_back.png"].default} height="300px" alt="logo" />);
        }
        else
        {
            const cardSuite = this.convertToChar();
            return ( <img onClick={() => this.setState({hidden: !this.state.hidden, card: this.state.card})} src={images[`${this.state.card.face}${cardSuite}.png`].default} height="300px" alt="logo" />);
        }
    }
}

export default CardView;