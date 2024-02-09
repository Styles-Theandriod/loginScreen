import { StyleSheet, Text, View, SafeAreaView,TextInput, TouchableOpacity, Platform } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
    const placeholderColor = {
        backgroundColor: 'red',
    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.LoginScreen}>
        <Text style={styles.heading}>Welcome Back 👋</Text>
        <Text style={styles.description}>I am so happy to see you. You can continue to login for manage your finnace</Text>
      </View>
      <View style={styles.Parent}>
        <TextInput placeholder='Email' placeholderTextColor={placeholderColor} style={styles.TextInput}/>

        <View style={styles.Flexcontainer}>
            <View>
                <TextInput placeholder='Password' placeholderTextColor={placeholderColor} style={styles.TextInput2}/>
            </View>

            <View style={styles.Fingerprint}>
                <Ionicons name="finger-print" size={29} color="green" />
            </View>
        </View>
        <TouchableOpacity >
            <Text style={styles.forgetPassword}>Forget Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.btnPrimary}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        height: '100%',
        paddingLeft:20,
        paddingRight:20
    },
    LoginScreen:{
        marginTop:100
    },
    heading:{
        fontSize:35,
        fontWeight: '900',
        color: 'green',
    },
    description:{
        color: 'gray',
        marginTop:15,
        fontSize:18 
    },
    TextInput:{
        borderColor:'green',
        borderWidth:2,
        padding:15,
        borderRadius:10,
        backgroundColor:'#f1faee',
    },
    TextInput2:{
        padding:15,
        borderRadius:10,
        backgroundColor:'#f1faee',
        width:300,
        marginRight:10
    },
    Flexcontainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        height:100,
    },
    Fingerprint: {
        padding:15,
        borderRadius:10,
        borderWidth:1,
        borderColor:'green',
    },
    Parent: {
        marginTop:50
    },
    forgetPassword: {
        textAlign: 'right',
        fontWeight:'900',
        color: 'green'
    },
    loginButton:{
        backgroundColor:'green',
        padding:20,
        marginTop:200,
        borderRadius:10,
        ...Platform.select({
            ios:{
                shadowColor:'#000000',
                shadowOpacity:0.3,
                shadowRadius:10,
                shadowOffset:{width:0, height: 2}
            },
            android:{
                shadowColor:'lightgreen',
                shadowOpacity:0.3,
                shadowRadius:10,
                shadowOffset:{width:0, height: 2} 
            }
        }),
    },
    
    btnPrimary:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'900',
        color:'white',
    },
})