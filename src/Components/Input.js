import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    render() {
        return (
            <div className={this.props.fieldClass}>
                <label className={this.props.labelClass}>{this.props.labelDescribe}</label>
                <input type="tel" id={this.props.fieldName} name={this.props.fieldName} className={this.props.inputClass} />
            </div>
        );
    }
}

export default Input;
