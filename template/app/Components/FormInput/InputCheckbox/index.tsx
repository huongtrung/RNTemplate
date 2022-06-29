import React, {useEffect} from 'react'
import {Checkbox, Icon} from 'native-base'

interface CheckboxProps {
  options: any[],
  value: any,
  onChangeValue: () => void
}

const InputCheckbox: React.FC<CheckboxProps> = ({options, value, onChangeValue}) => {
  return (
    <Checkbox.Group onChange={onChangeValue} value={value}>
      {options?.map((item, index) => (
        <Checkbox
          value={item?.value}
          my={1}
          key={index}>
          {item?.label}
        </Checkbox>
      ))}
    </Checkbox.Group>
  )
}

export default InputCheckbox
