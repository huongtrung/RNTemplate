import {TextView} from '@/Components'
import React, {useImperativeHandle, useState} from 'react'
import {
  Modal,
  StatusBar,
  TouchableWithoutFeedback,
  View,
  Button
} from 'react-native'
import ReactNativeModal from 'react-native-modal'
import {styles} from './styles'

export const globalMessageRef = React.createRef<any>()
export const globalMessage = {
  show: (title: string, content: string) => {
    globalMessageRef?.current?.show(title, content)
  }
}

export interface Props {
  name?: string
}

const GlobalMessage = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  useImperativeHandle(ref, () => {
    return {show: show}
  })

  const show = (title: string, content: string) => {
    setVisible(true)
    setTitle(title)
    setContent(content)
  }

  return (
    <ReactNativeModal
      style={styles.main}
      isVisible={visible}
      animationIn={'slideInUp'}>
      <TouchableWithoutFeedback onPress={() => setVisible(false)}>
        <View style={styles.main}>
          <View style={styles.boxContent}>
            <View style={styles.content}>
              <View style={styles.title}>
                <TextView bold fontSize={17} color={'black'}>
                  {title}
                </TextView>
              </View>
              <View style={styles.message}>
                <TextView
                  fontSize={15}
                  color={'black'}
                  style={{textAlign: 'center'}}>
                  {content}
                </TextView>
              </View>
              <Button
                // style={styles.button}
                title={'OK'}
                onPress={() => {
                  setVisible(false)
                }}
                // bgColor={'gray'}
                // textColor={'white'}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ReactNativeModal>
  )
})

export default GlobalMessage
