import React, { Component } from 'react';
import TypeControls from './TypeControls';
import TextDisplay from './TextDisplay';
import {typeScales} from './type-scales';
import './App.css';
import CssDisplay from './CssDisplay';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: 16,
      selectedTypeScaleIndex: 3,
    };
  }

  updateFontSize(newFontSize){
    newFontSize = newFontSize ? Math.max(1, parseInt(newFontSize, 10)) : 1;
    this.setState({fontSize: newFontSize});
  }

  updateTypeScaleIndex(newTypeScaleIndex){
    this.setState({selectedTypeScaleIndex: newTypeScaleIndex});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Typescaler</h1>
        </header>
        <div className="container">
          <TypeControls fontSize={this.state.fontSize} onFontSizeChanged={(fontSize)=>{this.updateFontSize(fontSize)}} typeScales={typeScales} selectedTypeScaleIndex={this.state.selectedTypeScaleIndex} onSelectedTypeScaleIndexChanged={(index)=>{this.updateTypeScaleIndex(index)}} />
        </div>
        <div className="container">
          <TextDisplay baseFontSize={this.state.fontSize} typeRatio={typeScales[this.state.selectedTypeScaleIndex].ratio} />
        </div>
        <div className="container">
          <CssDisplay baseFontSize={this.state.fontSize} typeRatio={typeScales[this.state.selectedTypeScaleIndex].ratio} />
        </div>
      </div>
    );
  }
}

export default App;
