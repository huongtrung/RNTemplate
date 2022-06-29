/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {View} from 'native-base'
import {StyleProp, ViewStyle} from 'react-native'

interface CanViewProps {
  condition: boolean,
  children: React.ReactNode,
  fallbackComponent?: () => React.ReactElement,
  isReturnNull?: boolean,
  style?: StyleProp<ViewStyle>, 
}

const CanView: React.FC<CanViewProps> = ({
  condition,
  children,
  fallbackComponent,
  isReturnNull,
  style
}) => {
  if (!condition && fallbackComponent) {
    return fallbackComponent()
  }

  if (!condition && isReturnNull) {
    return null
  }
  return (
    <View style={[{display: condition ? 'flex' : 'none'}, style]}>
      {children}
    </View>
  )
}

export default CanView
