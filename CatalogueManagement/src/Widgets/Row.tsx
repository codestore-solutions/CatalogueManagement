import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Row = (props:{children:JSX.Element[]}) => {
  return (
    <View style={{flexDirection:'row'}}>
      {props.children}
    </View>
  )
}

export default Row

const styles = StyleSheet.create({})