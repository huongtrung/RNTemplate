import React from 'react'
import {Text} from 'native-base'

const CustomText = ({...props}) => {
  // fontSize, isTruncated, maxW, w, underline, strikeThrough, italic, highlight, color, bold
  return <Text {...props}>{props?.children}</Text>
}

export default CustomText
