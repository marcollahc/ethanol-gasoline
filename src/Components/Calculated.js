import React, { Component } from 'react';
import ComparativeList from './ComparativeList';
import ComparativeItem from './ComparativeItem';
import Button from './Button';

class Calculated extends Component {
    componentWillMount() {
        this.setState({
            resultData: JSON.parse(localStorage.getItem("resultData"))
        });
    }
    render() {
        return (
            <React.Fragment>
                <ComparativeList>
                    <ComparativeItem fuel="Álcool" totalValue={this.state.resultData.totalEthanol} kilometers={this.state.resultData.kilometersEthanol} />
                    <ComparativeItem fuel="Gasolina" totalValue={this.state.resultData.totalGasoline} kilometers={this.state.resultData.kilometersGasoline} />
                </ComparativeList>
                <Button fieldClass="form-item form-field-bs" buttonClass="form-button form-button__default" buttonDescribe="Voltar" actionFunction="back" />
            </React.Fragment>
        );
    }
}

export default Calculated;
