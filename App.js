import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './assets/components/LoginScreen';
import Pinch from './assets/components/Pinch';

import 'react-native-gesture-handler';

import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  const imageURL = 'https://picsum.photos/200/300';
  return (
    <GestureHandlerRootView style={styles.container}>
     <LoginScreen/>
     <Pinch imageSource={imageURL}/>
    </GestureHandlerRootView>
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
