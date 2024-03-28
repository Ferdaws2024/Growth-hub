import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Root from './src/navigation/root'
import { AppProvider } from './src/context/appContext'
import { appInit } from './firebaseConfig'

const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <AppProvider>
        <Root />
      </AppProvider>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})