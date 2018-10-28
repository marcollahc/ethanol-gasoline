import Inputmask from 'inputmask';

const JSONMask = {
    mask: '999.999.999,99',
    numericInput: true,
    showMaskOnHover: false,
    jitMasking: true
};

const ApplyMask = (type, value) => {
    if (type === 'value') {
        return Inputmask.format(value, JSONMask);
    } else {
        Inputmask(JSONMask).mask(document.querySelector(value));
    }
}

export default ApplyMask;
