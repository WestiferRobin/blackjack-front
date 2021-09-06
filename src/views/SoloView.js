import React from "react"
import './SoloView.css'
import SoloEngine from "../game-engine/SoloEngine"

export class SoloView extends React.Component
{
    render()
    {
        return (
            <SoloEngine />
          );
    }
}

export default SoloView;