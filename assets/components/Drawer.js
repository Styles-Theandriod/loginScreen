import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'

import { NavigationContainer } from '@react-navigation/native'

// create a Drawer Navigator
const drawer = createDrawerNavigator(); 

const Drawer = () => {
  return (
        <drawer.Navigator>
            <drawer.Screen name='Home' component={HomeScreen}/>
            <drawer.Screen name='ProfileScreen' component={ProfileScreen}/>
        </drawer.Navigator>
  )
}

export default Drawer

const styles = StyleSheet.create({})