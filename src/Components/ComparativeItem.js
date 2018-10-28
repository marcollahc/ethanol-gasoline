import React, { Component } from 'react';
import './Comparative.css';

class ComparativeItem extends Component {
    render() {
        return (
            <div className="comparative-item">
                <div className="table-title-item">Completando um tanque com {this.props.fuel}</div>
                <div className="table-cell-row">
                    <div className="table-cell-title">Você paga</div>
                    <div className="table-cell-title">Você anda</div>
                </div>
                <div className="table-cell-row">
                    <div className="table-cell-content">R$ {this.props.totalValue}</div>
                    <div className="table-cell-content">{this.props.kilometers} km</div>
                </div>
            </div>
        );
    }
}

export default ComparativeItem;
