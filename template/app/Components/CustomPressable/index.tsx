import React from 'react'
import {Pressable} from 'native-base'
import {StyleProp, ViewStyle} from 'react-native'

interface PressableProps {
  isDisabled?: boolean,
  onPress?: () => void,
  style?: StyleProp<ViewStyle>,
  children: React.ReactNode,
  onFocused?: () => void,
  onPressed?: () => void,
}

const CustomPressable: React.FC<PressableProps> = ({
  isDisabled,
  onPress,
  style,
  children,
  onFocused,
  onPressed
}) => {
  return (
    <Pressable isDisabled={isDisabled} onPress={onPress} style={style}>
      {({isHovered, isFocused, isPressed}) => {
        if (isFocused && !!onFocused) {
          onFocused()
        }
        if (isPressed && !!onPressed) {
          onPressed()
        }
        return children
      }}
    </Pressable>
  )
}

export default CustomPressable
