import * as React from 'react'
import {Text, View, Image} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icons from '@/Assets/Images'
import HomeStackNavigator from '../HomeStackNavigator'

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          switch (route.name) {
            case 'HomeStack':
              return (
                <Image
                  source={Icons.icHome}
                  resizeMode={'contain'}
                  style={{width: 25, height: 25}}
                />
              )
            case 'Settings':
              return (
                <Image
                  source={Icons.icSetting}
                  resizeMode={'contain'}
                  style={{width: 25, height: 25}}
                />
              )
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray'
      })}>
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} options={{ tabBarBadge: 3 }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}
