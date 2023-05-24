import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

type propType = {
    title1:string,
    action1: (arg0: boolean) => void,
    arg1:boolean,
    title2:string,
    action2:(arg0: boolean) => void,
    arg2:boolean
}

const ProductFooter = (props:propType) => {
  return (
    <View style = {styles.footer}><TouchableOpacity
    onPress={()=>{props.action1(props.arg1)}}
    >
    <View><Text style = {styles.text}>{props.title1}</Text></View>
    </TouchableOpacity>
    <View style = {styles.divider}></View>
    <TouchableOpacity
    onPress={()=>{props.action2(props.arg2);
    }}
    >
    <View><Text style = {styles.text}>{props.title2}</Text></View>
    </TouchableOpacity>
</View>
  )
}

export default ProductFooter

const styles = StyleSheet.create({
    divider:{
        height:"70%",
        width:1,
        backgroundColor:"grey"
    },
    text:{
        color:"black",
        fontWeight:"800",
        fontSize:16
    },
    footer:{
        height:60,
        borderColor:'grey',
        borderTopWidth:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
    },
})