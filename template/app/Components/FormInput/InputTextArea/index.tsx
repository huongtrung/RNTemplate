import React from 'react'
import {TextArea} from 'native-base'

interface InputTextAreaProps {
  value: any,
  h?: number,
  w?: number,
  maxW?: number,
  isDisabled?: boolean,
  autoCompleteType?: any,
  placeholder: string,
  onChangeValue: () => void,
}

const InputTextArea: React.FC<InputTextAreaProps> = ({
  value,
  placeholder,
  h,
  w,
  maxW,
  isDisabled,
  autoCompleteType,
  onChangeValue,
}) => {
  return (
    <TextArea
      value={value}
      onChangeText={onChangeValue}
      h={h}
      placeholder={placeholder}
      w={w}
      maxW={maxW}
      isDisabled={isDisabled}
      autoCompleteType={autoCompleteType}/>
  )
}

export default InputTextArea
