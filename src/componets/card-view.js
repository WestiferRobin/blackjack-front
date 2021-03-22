import React from 'react';
import './card-view.css';
import {spade, club} from '../types/card-types';

export class CardView extends React.Component
{
    // TODO: Fix the damn view to look like real card and not sticks!!!!!
    render()
    {
        var cardColor  = this.props.card.suite == spade || this.props.card.sutie == club ? "base-card black-card" : "base-card red-card";
        return (
            <div className={cardColor}>
                <div className="top-number">{this.props.card.face}</div>
                <span >{this.props.card.suite}</span>
                <div className="bot-number">{this.props.card.face}</div>
            </div>
        );
    }
}

export default CardView;