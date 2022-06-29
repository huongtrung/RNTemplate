import {CardStyleInterpolators, TransitionSpecs} from '@react-navigation/stack'
import {StackActions} from '@react-navigation/native'
import React from 'react'

const NAV_OPTION = {
  headerShown: false,
  gestureEnabled: false,
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
}

const navigationRef = React.createRef<any>()

const reset = (screen: string, params: any) => {
  navigationRef.current?.reset({
    index: 0,
    routes: [{name: screen, params}]
  })
}

const navigate = (name: string, params: any) => {
  navigationRef.current?.navigate(name, params)
}

const goBack = () => {
  navigationRef.current?.goBack()
}

const replace = (name: string, params: any) => {
  navigationRef.current?.dispatch(StackActions.replace(name, params))
}

const push = (name: string, params: any) => {
  navigationRef.current?.dispatch(StackActions.push(name, params))
}

const pop = (params: any) => {
  navigationRef.current?.dispatch(StackActions.pop(params))
}

const getCurrentRoute = () => {
  let state = navigationRef.current?.getRootState()
  let currentRoute = {screen_name: '', screen_class: ''}
  const routeState = state?.routes[state.index]?.state
  currentRoute = {
    screen_name: routeState?.routes[routeState.index]?.name,
    screen_class: state?.routes[state.index]?.name
  }
  return currentRoute
}

export {
  NAV_OPTION,
  navigationRef,
  goBack,
  push,
  navigate,
  reset,
  getCurrentRoute,
  replace,
  pop
}
