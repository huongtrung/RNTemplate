/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {NativeBaseProvider, Text} from 'native-base'
import {Provider} from 'react-redux'
import {store} from './app/Config/ReduxConfig/Store'
import NavigationService from './app/Navigation/NavigationService'
import {LogBox, SafeAreaView, StatusBar} from 'react-native'
import {CommonStyles} from '@/Themes'
import {GlobalModal, CustomLoading} from '@/Components'
import GlobalLoading, {globalLoadingRef} from '@/Components/GlobalLoading'
import GlobalMessage, {globalMessageRef} from '@/Components/GlobalMessage'
import {API_URL} from './env.json'
import {I18nextProvider} from 'react-i18next'
import i18next from '@/Utils/LanguagesUtil'

LogBox.ignoreAllLogs()
const App = () => {
  console.log('aaaaa', API_URL)
  return (
    <SafeAreaProvider>
      <SafeAreaView style={CommonStyles.container}>
        <NativeBaseProvider>
        <I18nextProvider i18n={i18next}>
          <Provider store={store}>
            <StatusBar
              backgroundColor={'transparent'}
              barStyle={'dark-content'}
            />
            <NavigationService />
            <GlobalModal />
            <CustomLoading />
            <GlobalLoading ref={globalLoadingRef} />
            <GlobalMessage ref={globalMessageRef} />
          </Provider>
          </I18nextProvider>
        </NativeBaseProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App
