import React, { Component } from 'react';
import './Comparative.css';

class ComparativeList extends Component {
    render() {
        return (
            <div className="comparative-list">
                {this.props.children}
            </div>
        );
    }
}

export default ComparativeList;
