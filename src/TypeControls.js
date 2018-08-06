import React, { Component } from 'react';
import './TypeControls.css';

class TypeControls extends Component {
  render() {
    return (
      <div className="TypeControls">
        <div>
            <label>Base font size</label><input type="number" value={this.props.fontSize} onChange={(e)=>{this.props.onFontSizeChanged(e.target.value);}} />
        </div>
        <div>
            <select value={this.props.selectedTypeScaleIndex} onChange={(e)=>{this.props.onSelectedTypeScaleIndexChanged(e.target.value)}}>
                {this.props.typeScales.map((typeScale, i)=>{
                    return <option key={i} value={i}>{typeScale.title}</option>;
                })}
            </select>
        </div>
      </div>
    );
  }
}

export default TypeControls;
