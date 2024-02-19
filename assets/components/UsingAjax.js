import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const UsingAjax = () => {
    const [data, setData] = useState(null)

    const fetchData = async () =>{
        try {
            const response = await fetch('http://api.example.com/data')
            const result = await response.json();
            setData(result)
        } catch (e){
            console.error('Error fetching data', e);
        }
    };

    useEffect(()=>{
        fetchData();
    }, [])
  return (
    <View>
      <Text>Data from API</Text>
      { data ? (
        <Text>{JSON.stringify()}</Text>
      ) : (
        <Text>Loading....</Text>
      )}
    </View>
  )
}

export default UsingAjax

const styles = StyleSheet.create({})