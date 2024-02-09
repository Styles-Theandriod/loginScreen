import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { PinchGestureHandler, State } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const Pinch = ({ imageSource }) => {
    const scale = useSharedValue(1);
    const focalX = useSharedValue(0);
    const focalY = useSharedValue(0);

    const pinchHandler = useAnimatedGestureHandler({
        onActive: (event) =>{
            scale.value = event.scale;
            focalX.value = event.focalX;
            focalY.value = event.focalY;
        },
        onEnd: () => {
          scale.value = withSpring(1);
        },
    })


    const animatedStyle = useAnimatedStyle(()=>{
        return {
            transform: [
                { translateX:focalX.value },
                { translateY:focalY.value },
                { translateX: -focalX.value },
                { translateY: -focalY.value },
                { scale: scale.value },
            ]
        }
    })
  return (
    <PinchGestureHandler onGestureEvent={pinchHandler} onHandlerStateChange={pinchHandler}>
        <Animated.View style={[styles.container, animatedStyle]}>
        <Image source={{uri:imageSource}} style={styles.image}/>
        </Animated.View>
    </PinchGestureHandler>
  )
}

export default Pinch

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'      
    }
})