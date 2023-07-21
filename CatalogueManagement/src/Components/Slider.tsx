import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PrimaryColor } from '../Constants/colors'

const Slider = () => {
  return (
    <View style={styles.base}>
        <View style={styles.slider}></View>
        <View style={styles.selected}></View>
        <View style={styles.slider}></View>
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
    base:{
        shadowColor:'rgba(0, 0, 0, 0.1)',
        backgroundColor:'rgba(234, 234, 234, 1)',
        width:'100%',
        height:8,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
        paddingLeft:80
    },
    slider:{
        height:30,
        width:30,
        borderWidth:5,
        backgroundColor:'white',
        borderColor:PrimaryColor,
        borderRadius:20,
    },
    selected:{
        width:100,
        backgroundColor:PrimaryColor,
        height:8,
    }
})