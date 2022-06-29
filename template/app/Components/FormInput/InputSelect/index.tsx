import React from 'react'
import {CheckIcon, Select} from 'native-base'

interface InputSelectProps {
  options: any[],
  value: any,
  bg?: string,
  placeholder: string,
  minWidth: number,
  onChangeValue: () => void
}

const InputSelect: React.FC<InputSelectProps>  = ({
  options,
  value,
  bg,
  placeholder,
  minWidth,
  onChangeValue = () => {}
}) => {
  return (
    <Select
      selectedValue={value}
      minWidth={minWidth}
      accessibilityLabel={placeholder}
      placeholder={placeholder}
      _selectedItem={{
        bg: bg,
        endIcon: <CheckIcon size="5" />
      }}
      mt={1}
      onValueChange={onChangeValue}>
      {options?.map((item, index) => (
        <Select.Item label={item.label} value={item.value} key={index} />
      ))}
    </Select>
  )
}

export default InputSelect
