import {StyleSheet} from 'react-native'
import Colors from './Colors'

const CommonStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerCenter: {
    flex: 1,
    backgroundColor: Colors.white
  },
  modal: {
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 24
  },
  formStyle: {},
  loadingBg: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CommonStyles
