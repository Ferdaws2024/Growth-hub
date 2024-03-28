import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/splash'
import Onboarding from '../screens/onboarding'
import Login from '../screens/login'
import SignUp from '../screens/signUp'
import Appstack from './Appstack'

const Stack = createNativeStackNavigator()

const Root = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='Splash' component={Splash} />
                <Stack.Screen name='Onboarding' component={Onboarding} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Sign-Up' component={SignUp}>
                    
                </Stack.Screen>
                <Stack.Screen name='Appstack' component={Appstack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Root

const styles = StyleSheet.create({})