import React, { Component } from 'react';
import ApplyMask from './MaskValues';
import Input from './Input';
import Button from './Button';

class Form extends Component {
    componentDidMount() {
        ApplyMask('field', '#capacity_tank');
        ApplyMask('field', '#value_ethanol');
        ApplyMask('field', '#consumption_ethanol');
        ApplyMask('field', '#value_gasoline');
        ApplyMask('field', '#consumption_gasoline');
    }
    render() {
        return (
            <React.Fragment>
                <Input fieldClass="form-item form-field-bs" labelClass="form-label" labelDescribe="Capacidade tanque (l)" fieldName="capacity_tank" inputClass="form-field" />
                <Input fieldClass="form-item form-field-ms" labelClass="form-label" labelDescribe="Valor etanol (R$)" fieldName="value_ethanol" inputClass="form-field" />
                <Input fieldClass="form-item form-field-ms" labelClass="form-label" labelDescribe="Consumo (KM/l)" fieldName="consumption_ethanol" inputClass="form-field" />
                <Input fieldClass="form-item form-field-ms" labelClass="form-label" labelDescribe="Valor gasolina (R$)" fieldName="value_gasoline" inputClass="form-field" />
                <Input fieldClass="form-item form-field-ms" labelClass="form-label" labelDescribe="Consumo (KM/l)" fieldName="consumption_gasoline" inputClass="form-field" />
                <Button fieldClass="form-item form-field-bs" buttonClass="form-button form-button__confirm" buttonDescribe="Calcular" actionFunction="calculate" />
            </React.Fragment>
        );
    }
}

export default Form;
