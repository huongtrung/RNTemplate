// @ts-nocheck
import {InputComponent, typeInputComponent} from './helper'
import {Controller} from 'react-hook-form'
import {View} from 'react-native'
import {CommonStyles} from '@/Themes'
import React, {useEffect, useRef} from 'react'

interface FormInputProps {
  type: string,
  control: any,
  name: string,
  defaultValue?: string,
  formStyle?: any,
  errors?: any,
  clearErrors?: {(name: string): void},
  disabled?: boolean,
  rules?: any,
  typeInput?: any,
  options?: any[],
  w?: any,
  h?: any,
  placeholder?: any,
  onChangeValue?: (value?: any) => void
}

const FormInput: React.FC<FormInputProps> = ({
  type = typeInputComponent.InputText,
  control,
  name,
  defaultValue = '',
  formStyle = {},
  errors,
  clearErrors,
  disabled = false,
  rules,
  typeInput,
  onChangeValue,
  ...props
}) => {
  const valueRef = useRef(null)

  useEffect(() => {
    if (valueRef.current === null) {
    }
  }, [valueRef.current])

  const renderComponent = (params: any) => {
    const { onChange, onBlur, value, name } = params?.field
    if (value !== valueRef.current) {
      valueRef.current = value
    }

    const Input = InputComponent[type]
    const controllerProps = Input?.onBlur 
    ? {
      [Input?.onChange]: onChange,
      [Input?.value]: value,
      [Input?.onBlur]: onBlur }
    : {
      [Input?.onChange]: onChange,
      [Input?.value]: value
    }
      
    
    // if (Input?.errorMessage) {
    //   controllerProps[Input?.errorMessage] = Utilities.safeReturn(errors, [name, 'message'], null)
    // }

    const customProps = {}
    if (props?.placeholder || props?.label) {
      customProps.placeholder = props?.placeholder || props?.label
    }

    return (
      <Input.Component
        {...controllerProps}
        {...props}
        {...customProps}
        typeInput={typeInput}
        disabled={disabled}
        onFocusInput={() => clearErrors && clearErrors(name)}
      />
    )
  }

  return (
    <View style={formStyle ? formStyle : CommonStyles.formStyle}>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={renderComponent}
        rules={rules}
      />
    </View>
  )
}

export default FormInput
