import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Avatar = (props:{url:string,height?:number,margin?:number,backgroundColor?:string}) => {
    let height = 50;
    if(props.height!=undefined){height = props.height;}
  return (
   <Image
   source={{uri:props.url}}
   style={{height:height,width:height,borderRadius:height,margin:props.margin,backgroundColor:props.backgroundColor}}
   />
)
}

export default Avatar

const styles = StyleSheet.create({}) 