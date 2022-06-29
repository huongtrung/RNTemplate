import {View, Text} from 'react-native'
import React from 'react'
import {Input} from 'native-base'

interface InputTextProps {
  errorMessage: string,
  valueText: any,
  bg?: string,
  placeholder: string,
  onChangeValue: () => void,
  onBlur?: () => void,
}

const InputText: React.FC<InputTextProps> = ({
  placeholder,
  valueText,
  errorMessage,
  onChangeValue,
  onBlur,
  ...props
}) => {
  return (
    <Input
      mx="3"
      w="75%"
      placeholder={placeholder}
      onChangeText={onChangeValue}
      onBlur={onBlur}
      {...props}
    />
  )
}

export default InputText
