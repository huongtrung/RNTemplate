import InputText from './InputText'
import InputCheckbox from './InputCheckbox'
import {InputRadio, InputSwitch, InputSelect, InputTextArea} from '..'

export const typeInputComponent = {
  InputText: 'input-text',
  InputCheckbox: 'Input-checkbox',
  InputSwitch: 'Input-switch',
  InputRadio: 'Input-radio',
  InputSelect: 'Input-select',
  InputTextArea: 'Input-textArea'
}

export const InputComponent = {
  [typeInputComponent.InputText]: {
    Component: InputText,
    onChange: 'onChangeValue',
    value: 'valueText',
    errorMessage: 'errorMessage',
    onBlur: 'onBlur'
  },
  [typeInputComponent.InputSwitch]: {
    Component: InputSwitch,
    onChange: 'onChangeValue',
    value: 'value'
  },
  [typeInputComponent.InputRadio]: {
    Component: InputRadio,
    onChange: 'onChangeValue',
    value: 'value',
    options: 'options'
  },
  [typeInputComponent.InputCheckbox]: {
    Component: InputCheckbox,
    onChange: 'onChangeValue',
    value: 'value',
    options: 'options'
  },
  [typeInputComponent.InputSelect]: {
    Component: InputSelect,
    onChange: 'onChangeValue',
    value: 'value',
    options: 'options',
    minWidth: 'minWidth',
    placeholder: 'placeholder',
    bg: 'bg'
  },
  [typeInputComponent.InputTextArea]: {
    Component: InputTextArea,
    onChange: 'onChangeValue',
    value: 'value',
    h: 'h',
    w: 'w',
    maxW: 'maxW',
    placeholder: 'placeholder',
    isDisabled: 'isDisabled'
  }
}

export const typeTextInput = {
  text: 'text'
}
