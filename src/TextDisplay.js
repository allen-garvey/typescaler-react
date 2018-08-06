import React, { Component } from 'react';
import {fontSizes} from './type-scales';
import './TextDisplay.css';

class TextDisplay extends Component {
  render() {
    return (
      <div className="TextDisplay">
        <ul>
            {fontSizes(this.props.baseFontSize, this.props.typeRatio).map((fontSize, i)=>{
                return <li key={i} style={{fontSize: fontSize.full+'px'}}>
                <span className="font-size-info">{fontSize.full.toFixed(2)+'px ' + fontSize.base.toFixed(2)+'rem'}</span><span>Hello there!</span></li>;
            })}
        </ul>
      </div>
    );
  }
}

export default TextDisplay;
