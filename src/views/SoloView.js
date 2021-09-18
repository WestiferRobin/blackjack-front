import React from "react"
import './SoloView.css'
import SoloEngine from "../game-engine/SoloEngine"

export class SoloView extends React.Component
{
    state = {controlFlag: "New"}
    constructor(props)
    {
        super(props);
        this.state = {controlFlag: "New"};
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
                    <button onClick={() => this.changeFlag("Hit")}>Hit</button>
                    <button onClick={() => this.changeFlag("Stand")}>Stand</button>
                    <button onClick={() => this.changeFlag("Double")}>Double</button>
                    <button onClick={() => this.changeFlag("Split")}>Split</button>
                    <button onClick={() => this.changeFlag("Reset")}>Reset</button>

                </footer>
            </div>
          );
    }
}

export default SoloView;