import React from "react"
import './SoloView.css'
import SoloEngine from "../game-engine/SoloEngine"
import {buttonAction} from "../constants";

export class SoloView extends React.Component
{
    state = {controlFlag: "New"}
    constructor(props)
    {
        super(props);
        this.state = {controlFlag: buttonAction.NEW};
        this.changeFlag = this.changeFlag.bind(this);
    }

    changeFlag(newFlag)
    {
        this.setState({controlFlag: newFlag});
    }


    render()
    {
        return (
            <div>
            <body className="SoloView-body">
                <SoloEngine controlFlag={this.state.controlFlag} />
            </body>
            <footer className="SoloView-footer">
                {/*Change these String values into enums*/}
                    <button onClick={() => this.changeFlag(buttonAction.HIT)}>Hit</button>
                    <button onClick={() => this.changeFlag(buttonAction.STAND)}>Stand</button>
                    <button onClick={() => this.changeFlag(buttonAction.DOUBLE)}>Double</button>
                    <button onClick={() => this.changeFlag(buttonAction.SPLIT)}>Split</button>
                    <button onClick={() => this.changeFlag(buttonAction.RESET)}>Reset</button>

                </footer>
            </div>
          );
    }
}

export default SoloView;