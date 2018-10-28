import React, { Component } from 'react';
import ApplyMask from './MaskValues';
import { withRouter } from 'react-router-dom';
import './Button.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.handlerCalculate = this.handlerCalculate.bind(this);
        this.handlerBack = this.handlerBack.bind(this);
        this.toFloatField = this.toFloatField.bind(this);
        this.validateNull = this.validateNull.bind(this);
        this.history = this.props;
    }
    validateNull(field) {
        if (field.value === '') {
            field.classList.add('form-field__error');
            return true;
        } else {
            field.classList.remove('form-field__error');
            return false;
        }
    }
    toFloatField(value) {
        return parseFloat(value.replace(/\./gi, '').replace(',', '.'));
    }
    handlerCalculate() {
        let error = false;
        const capacityTank = document.getElementById('capacity_tank');
        const valueEthanol = document.getElementById('value_ethanol');
        const consumptionEthanol = document.getElementById('consumption_ethanol');
        const valueGasoline = document.getElementById('value_gasoline');
        const consumptionGasoline = document.getElementById('consumption_gasoline');

        if (this.validateNull(capacityTank)) {
            error = true;
        }

        if (this.validateNull(valueEthanol)) {
            error = true;
        }

        if (this.validateNull(consumptionEthanol)) {
            error = true;
        }

        if (this.validateNull(valueGasoline)) {
            error = true;
        }

        if (this.validateNull(consumptionGasoline)) {
            error = true;
        }

        if (error === false) {
            const totalEthanol = (this.toFloatField(capacityTank.value) * this.toFloatField(valueEthanol.value));
            const kilometersEthanol = (this.toFloatField(capacityTank.value) * this.toFloatField(consumptionEthanol.value));
            const totalGasoline = (this.toFloatField(capacityTank.value) * this.toFloatField(valueGasoline.value));
            const kilometersGasoline = (this.toFloatField(capacityTank.value) * this.toFloatField(consumptionGasoline.value));

            const result = {
                capacityTank: ApplyMask('value', capacityTank.value),
                totalEthanol: ApplyMask('value', totalEthanol.toFixed(2).toString()),
                kilometersEthanol: ApplyMask('value', kilometersEthanol.toFixed(2).toString()),
                totalGasoline: ApplyMask('value', totalGasoline.toFixed(2).toString()),
                kilometersGasoline: ApplyMask('value', kilometersGasoline.toFixed(2).toString())
            };

            localStorage.setItem('resultData', JSON.stringify(result));

            console.log(result);

            this.props.history.push('/result');
        }
    }
    handlerBack() {
        this.props.history.push('/');
    }
    render() {
        let Button;

        if (this.props.actionFunction === 'calculate') {
            Button = <button className={this.props.buttonClass} onClick={this.handlerCalculate}>{this.props.buttonDescribe}</button>;
        } else if (this.props.actionFunction === 'back') {
            Button = <button className={this.props.buttonClass} onClick={this.handlerBack}>{this.props.buttonDescribe}</button>;
        }
        return (
            <div className={this.props.fieldClass}>
                {Button}
            </div>
        );
    }
}

export default withRouter(Button);
