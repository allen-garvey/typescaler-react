import React, { Component } from 'react';
import {fontSizes} from './type-scales';
import './CssDisplay.css';

class CssDisplay extends Component {
  render() {
    return (
      <div className="CssDisplay">
        <h2>CSS</h2>
        <code>
            <pre>
                html{'{\n\tfont-size: ' + this.props.baseFontSize + 'px;\n}'}
            </pre>
            {fontSizes(this.props.baseFontSize, this.props.typeRatio).slice(0, 6).map((fontSize, i)=>{
                return <pre key={i}>
                    {'h'+ (i+1) +'{\n\tfont-size: '+fontSize.base.toFixed(2)+'rem;\n}'}
                </pre>;
            })}
        </code>
      </div>
    );
  }
}

export default CssDisplay;
