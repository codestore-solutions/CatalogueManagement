import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DeliveryCard = () => {
  return (
    <View style={styles.body}>
        <Text style={{color:'black'}}>Selected Address</Text>
        <Text style={{fontSize:24}}>Default Address</Text>
    </View>
  )
}

export default DeliveryCard

const styles = StyleSheet.create({
    body:{
        height:80,
        margin:10,
        backgroundColor:'#D9E0EC',
        borderRadius:10,
        padding:5
    }
})