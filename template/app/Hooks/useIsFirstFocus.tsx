import {useCallback, useState} from 'react'
import {useFocusEffect} from '@react-navigation/native'

const useIsFirstFocus = () => {
  const [isFirstFocus, setIsFirstFocus] = useState(true)

  useFocusEffect(
    useCallback(() => {
      return () => {
        setIsFirstFocus(false)
      }
    }, [])
  )
  return isFirstFocus
}

export default useIsFirstFocus
