import {View, Text, TouchableOpacity, ScrollView} from 'react-native'
import React, {useState, useEffect} from 'react'
import {
  FormInput,
  CustomText,
  TextView,
  FlatListView,
  CanView
} from '@/Components'
import {CommonStyles} from '@/Themes'
import {FormProvider, useForm} from 'react-hook-form'
import {typeInputComponent} from '@/Components/FormInput/helper'
import {useDispatch} from 'react-redux'
import {rootActions} from '@/ReduxSaga/Root/RootRedux'
import {MODAL_TYPE} from '@/Constants'
import {globalMessage} from '@/Components/GlobalMessage'
import {globalLoading} from '@/Components/GlobalLoading'
import {useAppSelector} from '@/Hooks/useAppSelector'
import {ItemClick} from 'native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types'
import Utilities from '@/Utils/Util'

export default function HomeScreen() {
  const dispatch = useDispatch()
  const userList = useAppSelector((state: any) => state.root.userList)
  const [step, setStep] = useState<number>(0)

  const methods = useForm()
  const {control} = useForm({
    // resolver: yupResolver(schema)
  })

  const [isShow, setShow] = useState(false)

  const showModal = () => {
    const modalProps = {
      typeModal: MODAL_TYPE.SUCCESS,
      messageModal: 'test hello'
    }
    dispatch(rootActions.displayGlobalModal(modalProps))
  }

  const showLoading = () => {
    dispatch(rootActions.displayLoading())
    // setTimeout(() => dispatch(rootActions.hideLoading()), 2000)
  }

  const getUsers = () => {
    dispatch(rootActions.getUsers())
  }
  const setUsers = () => {
    const params = {
      createdAt: '2022-02-23T00:57:24.904Z',
      name: 'new user',
      avatar: 'https://cdn.fakercloud.com/avatars/mikaeljorhult_128.jpg',
      id: '99999'
    }
    dispatch(rootActions.setUsers(params))
  }

  let value = {}
  let setValue = () => {}
  const listValueRadio = [
    {label: 'radio 1', value: 'value 1'},
    {label: 'radio 2', value: 'value 2'},
    {label: 'radio 3', value: 'value 3'}
  ]
  const listValueCheckBox = [
    {label: 'radio 4', value: 'value 4'},
    {label: 'radio 5', value: 'value 5'},
    {label: 'radio 6', value: 'value 6'}
  ]

  const listValueSelect = [
    {label: 'radio 7', value: 'value 7'},
    {label: 'radio 8', value: 'value 8'},
    {label: 'radio 9', value: 'value 9'}
  ]

  const optionsForStep = (type: string) => {
    switch (type) {
      case typeInputComponent.InputRadio:
        return listValueRadio
      case typeInputComponent.InputCheckbox:
        return listValueCheckBox
      case typeInputComponent.InputSelect:
        return listValueSelect
      default:
        return []
    }
  }

  const onPressText = () => {
    globalMessage.show('ádasd', 'sadasdasd')
  }

  const onPressLoading = async () => {
    globalLoading.show()
    await Utilities.delay(1000)
    globalLoading.hide()
  }

  const onPressNext = () => {
    if (step < totalDataForm.length) {
      setStep(step + 1)
    } else {
      console.log('end');
    }
  }

  const onPressBack = () => {
    if (step !== 0) {
      setStep(step - 1)
    } else {
      console.log('end');
    }
  }

  const onChangeValue = (valueRadioSelected: any) => {
    // setValueRadio(valueRadioSelected)
    console.log('asdasd', {valueRadioSelected})
  }

  const totalDataForm = [
    {
      name: 'textInput',
      type: typeInputComponent.InputText
    },
    {
      type: typeInputComponent.InputRadio
    },
    // {
    //   type: typeInputComponent.InputCheckbox
    // },
    {
      type: typeInputComponent.InputSelect
    },
    {
      type: typeInputComponent.InputTextArea
    }
  ]

  const renderItem = (item: any) => {
    return <TextView style={{color: 'black'}}>{item.item.name}</TextView>
  }

  return (
    <View style={CommonStyles.containerCenter}>
      <TouchableOpacity onPress={() => getUsers()}>
        <TextView>Call user</TextView>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPressText()}>
        <TextView>modal Text</TextView>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPressLoading()}>
        <TextView>Loading</TextView>
      </TouchableOpacity>

      <FormProvider {...methods}>
        {totalDataForm.map((item, index) => {
          return (
            <CanView key={index} condition={index === step}>
              <FormInput
                control={control}
                type={item.type}
                onChangeValue={onChangeValue}
                options={optionsForStep(item.type)}
                name={'aaaa'}
                w={'100%'}
                key={index}
                h={100}
                placeholder={'placeholderasd'}
              />
            </CanView>
          )
        })}
      </FormProvider>
      <TouchableOpacity onPress={() => showModal()}>
        <CustomText color="green.900" fontSize={30}>
          test custom text
        </CustomText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPressNext()}>
        <CustomText color="green.900" fontSize={30}>
          next
        </CustomText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPressBack()}>
        <CustomText color="green.900" fontSize={30}>
          back
        </CustomText>
      </TouchableOpacity>
      <FlatListView data={userList} renderItem={renderItem} />

      {/* <CustomModal isVisible={isShow}>
        <TouchableOpacity onPress={() => setShow(!isShow)}>
          <Text>aaaaa</Text>
        </TouchableOpacity>
      </CustomModal> */}
    </View>
  )
}
