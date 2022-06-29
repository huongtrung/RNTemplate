// @ts-nocheck
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {NAV_OPTION} from '@/Utils/NavigationUtil'
import {HomeScreen} from '@/Screens'

const Stack = createStackNavigator()

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={NAV_OPTION}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}
export default HomeStackNavigator
