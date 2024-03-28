import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/home'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Favorites from '../screens/favorites'


const Tab = createBottomTabNavigator()
const Appstack = () => {
  return (
    <Tab.Navigator  screenOptions={{

headerShown: false,
tabBarStyle:{
    backgroundColor:'#85B6FF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,

},
tabBarShowLabel: false

    }}>

<Tab.Screen name='HomeScreen' component= {Home} options={{
    tabBarIcon: () => <Entypo name="home" size={24} color="#233658" /> 
    

}} />
<Tab.Screen name='Setting' component= {Favorites} options={{
    tabBarIcon: () => <AntDesign name="heart" size={24} color="#233658" />
}}
   />
<Tab.Screen name='Chat' component= {Home} options={{
    tabBarIcon: () => <Ionicons name="chatbubble-ellipses" size={24} color="#233658" />
}}
    />

<Tab.Screen name='Reward' component= {Home} options={{
    tabBarIcon: () => <Ionicons name="trophy-sharp" size={24} color="#233658" /> }}
    
    />
<Tab.Screen name='Profile' component= {Home} options={{
    tabBarIcon:() => <FontAwesome name="user" size={24} color="black" /> }}
    />

    </Tab.Navigator>
   
  )
}

export default Appstack

const styles = StyleSheet.create({})