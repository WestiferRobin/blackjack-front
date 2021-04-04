import './App.css';
import {SoloView} from "./views/SoloView"
import React from 'react';
import {spade, club, heart, diamond } from "./types/card-types"

// TODO: format App to have different screens instead of ALL OF IT BEING IN APP.js!!!
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.renderTitle = this.renderTitle.bind(this);
    }

    renderTitle() {
      var arraySuites = [spade, heart, diamond, club];
      var title = ""
  
      arraySuites.sort(() => 0.5 - Math.random());
      arraySuites.forEach(suite => {
          title += `${suite} `
      });
      title += "Welcome To Blackjack! "
      arraySuites.sort(() => 0.5 - Math.random());
      arraySuites.forEach(suite => {
          title += `${suite} `
      });

      return title
    }

  render() {
    return (
      <div className="App">
        {/* TODO: add this to the App.css and fix the font size to be dynamic*/}
        <header style={{backgroundColor:"black", color:"white", fontSize: "50px"}}>
          {this.renderTitle()}
        </header>
        <body className="App-body">
          <SoloView />
        </body>
      </div>
    );
  }
}