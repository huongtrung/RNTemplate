import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import HomeStackNavigator from './HomeStackNavigator'
import {navigationRef} from '@/Utils/NavigationUtil'
import BottomTab from './BottomTabNavigator'

const NavigationService = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTab />
    </NavigationContainer>
  )
}

export default NavigationService
