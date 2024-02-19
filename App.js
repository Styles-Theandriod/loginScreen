import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './assets/components/HomeScreen';
import ProfileScreen from './assets/components/ProfileScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import Drawer from './assets/components/Drawer';


//Create a Tab Naviagtor 
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='HomeScreen' component={HomeScreen} options={{
          tabBarIcon: ({color, size}) => {
            <Ionicons name="home-outline" size={size} color={color} />
          }
        }}/>
        <Tab.Screen name='ProfileScreen' component={ProfileScreen} options={{
          tabBarIcon: ({color, size}) => {
            <Ionicons name="person-outline" size={size} color={color} />
          }
        }}/>
      </Tab.Navigator>

      <Drawer/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
