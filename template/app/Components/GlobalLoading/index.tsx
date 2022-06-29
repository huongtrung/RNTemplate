import {CommonStyles} from '@/Themes'
import React, {useImperativeHandle, useState} from 'react'
import {View} from 'react-native'
import {UIActivityIndicator} from 'react-native-indicators'
import ReactNativeModal from 'react-native-modal'

export const globalLoadingRef = React.createRef<any>()

export const globalLoading = {
  show: () => {
    globalLoadingRef?.current?.show()
  },
  hide: () => {
    globalLoadingRef?.current?.hide()
  }
}

export interface Props {
  name?: string
}

const GlobalLoading = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState<boolean>(false)

  useImperativeHandle(ref, () => {
    return {show: show, hide: hide}
  })

  const show = () => {
    setVisible(true)
  }

  const hide = () => {
    setVisible(false)
  }

  return (
    <ReactNativeModal animationOut={'fadeOut'} animationIn={'fadeIn'} isVisible={visible}>
      <View style={CommonStyles.loadingBg}>
        <UIActivityIndicator color="white" size={50} />
      </View>
    </ReactNativeModal>
  )
})

export default GlobalLoading
