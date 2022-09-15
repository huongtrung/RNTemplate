
import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {CommonStyles} from '@/Themes'
// import {CustomModal, CustomPressable} from '..'
import {Badge} from 'native-base'
import {useDispatch, useSelector} from 'react-redux'
import {rootActions} from '@/ReduxSaga/Root/RootRedux'
import {MODAL_TYPE} from '@/Constants'

const GlobalModal = () => {
  const rootState = useSelector((state: any) => state.root)
  const dispatch = useDispatch()

  const onCloseModal = () => {
    dispatch(rootActions.hideGlobalModal())
  }

  const renderModal = (type: string) => {
    let title
    switch (type) {
      case MODAL_TYPE.SUCCESS:
        title = 'modal SUCCESS'
        break
      case MODAL_TYPE.ERROR:
        title = 'modal ERROR'
        break
      default:
        title = 'modal INFO'
        break
    }

    return (
      <View style={styles.wrapperModal}>
        <Text style={styles.message}>{title}</Text>
        <Text style={styles.message}>{rootState.messageModal}</Text>
        {/* <CustomPressable
          onPress={onCloseModal}
          style={styles.buttonContainerStyle}>
          <View style={styles.wrapperButton}>
            <Badge
              colorScheme="darkBlue"
              _text={{
                color: 'white'
              }}
              variant="solid"
              rounded="4">
              OK
            </Badge>
          </View>
        </CustomPressable> */}
      </View>
    )
  }

  return (
    <View>
    </View>
    // <CustomModal
    //   isVisible={rootState.isVisibleModal}
    //   containerStyle={styles.containerStyle}>
    //   {renderModal(rootState.typeModal)}
    // </CustomModal>
  )
}

const styles = StyleSheet.create({
  ...CommonStyles,
  containerStyle: {
    flex: 0,
    height: 350
  },
  wrapperModal: {
    alignItem: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    height: 350,
    borderRadius: 5,
    alignContent: 'center'
  },
  message: {
    textAlign: 'center'
  },
  wrapperButton: {
    width: 200,
    alignContent: 'center',
    textAlign: 'center'
  },
  contentButton: {
    textAlign: 'center'
  },
  buttonContainerStyle: {
    alignItems: 'center',
    paddingVertical: 20
  }
})

export default GlobalModal
