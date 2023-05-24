import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Scaffold = (props:{body:any,footer:any}) => {
  return (
    <View>
      <View style={{height:'100%'}}>
        {props.body}
      </View>
      <View style={{bottom:0}}>
        {props.footer}
      </View>
    </View>
  )
}

export default Scaffold

const styles = StyleSheet.create({})