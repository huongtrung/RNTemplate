import React from 'react'
import {StyleProp, Text, TextProps, TextStyle} from 'react-native'
import Colors from '@/Themes/Colors'

const defaultProps = {
  style: {},
  fontSize: undefined,
  bold: false,
  color: undefined
}

interface IProps extends TextProps {
  fontSize?: number
  bold?: boolean | undefined
  color?: string | undefined
  style?: StyleProp<TextStyle>
  children?: React.ReactNode
}

const TextView: React.FC<IProps> = ({
  fontSize,
  children,
  color,
  bold,
  style,
  ...props
}) => {
  let FONTSIZE: number = 14
  if (fontSize) {
    FONTSIZE = fontSize
  }

  return (
    <Text
      {...props}
      style={[
        {
          // fontSize: scale(12),
          color: !color ? Colors.black : color
        },
        bold && {fontWeight: 'bold'},
        style
      ]}>
      {children}
    </Text>
  )
}

TextView.defaultProps = defaultProps

export default TextView
