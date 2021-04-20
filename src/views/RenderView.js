import React from "react";
import SoloView from "./SoloView";
import GroupView from "./GroupView";
import TrainingView from "./TrainingView";
import SimulationView from "./SimulationView";
import OptionsView from "./OptionsView";
import {spade, club, heart, diamond } from "../types/card-types";

export class RenderView extends React.Component
{
    views = {
        "solo": <SoloView />,
        "group": <GroupView />,
        "training": <TrainingView />,
        "simulation": <SimulationView />,
        "options": <OptionsView />,
        "splash": <div>{this.renderTitle()}</div>
    };


    constructor(props) {
        super(props);
        this.renderTitle = this.renderTitle.bind(this);
    }

    renderTitle() {
        var arraySuites = [spade, heart, diamond, club];
        var title = "";

        arraySuites.sort(() => 0.5 - Math.random());
        arraySuites.forEach(suite => {
            title += `${suite} `;
        });
        title += " Blackjack! ";
        arraySuites.sort(() => 0.5 - Math.random());
        arraySuites.forEach(suite => {
            title += `${suite} `;
        });

        return title; 
    }

    render()
    {
        try
        {
            return <div style={{backgroundColor:"#35654d"}}>{this.views[this.props.renderFlag]}</div>;
        }
        catch
        {
            return (<div>{this.renderTitle()}</div>);
        }
    }
}