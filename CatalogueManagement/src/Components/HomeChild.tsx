import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AdBanner from './AdBanner'
import Recommended from './Recommended'

const HomeChild = (props:{type:string,data?:any,navigation: { navigate: (arg0: string) => void }}) => {
  switch (props.type) {
    case ('AdBanner'):{
        return <AdBanner
        navigation={props.navigation}/>
    }
    case('ProductList'):{
        return <Recommended navigation={props.navigation}/>
    }
    default:
        return <View></View>
  }
}

export default HomeChild

const styles = StyleSheet.create({})