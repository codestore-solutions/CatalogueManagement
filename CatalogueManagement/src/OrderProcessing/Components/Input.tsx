import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const Input = (props:{placeholder:string,width?:string}) => {
  return (
    <TextInput placeholder={props.placeholder} style={[styles.input,{width: props.width != undefined? props.width:'97%'}]}/>
  )
}

export default Input

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderRadius:15,
        elevation:0,
        color:'#CCCCCC',
        borderColor:'#CCCCCC',
        paddingHorizontal:20,
        margin:5
    }
})