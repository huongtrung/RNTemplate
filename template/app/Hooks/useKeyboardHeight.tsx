import {useEffect, useState} from 'react'
import {Keyboard, KeyboardEvent} from 'react-native'

const useKeyboardHeight = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0)

  const onKeyboardDidShow = (e: any) => {
    setKeyboardHeight(e.endCoordinates.height)
  }

  const onKeyboardDidHide = () => {
    setKeyboardHeight(0)
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardDidShow)
    Keyboard.addListener('keyboardDidHide', onKeyboardDidHide)
    return () => {
      Keyboard.removeListener('keyboardDidShow', onKeyboardDidShow)
      Keyboard.removeListener('keyboardDidHide', onKeyboardDidHide)
    }
  }, [])

  return keyboardHeight
}

export default useKeyboardHeight
