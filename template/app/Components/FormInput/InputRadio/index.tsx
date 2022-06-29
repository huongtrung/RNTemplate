import React from 'react'
import {Radio} from 'native-base'

interface InputRadioProps {
  options: any[],
  value: any,
  onChangeValue: () => void
}

const InputRadio: React.FC<InputRadioProps> = ({options, value, onChangeValue}) => {
  return (
    <Radio.Group name={''} value={value} onChange={onChangeValue}>
      {options?.map((item, index) => {
        return (
          <Radio key={index} value={item.value} my={1}>
            {item.label}
          </Radio>
        )
      })}
    </Radio.Group>
  )
}

export default InputRadio
