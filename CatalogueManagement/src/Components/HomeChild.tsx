import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AdBanner from './AdBanner'
import Recommended from './Recommended'
import API from '../Services/API_Services'
import GridCard from './GridCard'
import Bestsellers from './Bestsellers'

const HomeChild = (props:{type:string,data?:any,navigation: { navigate: (arg0: string) => void }}) => {
  switch (props.type) {
    case ('AdBanner'):{
        return <AdBanner
        navigation={props.navigation}/>
    }
    case('ProductList'):{
        return <Recommended navigation={props.navigation}/>
    }
    case('Bestsellers'):{
        return <Bestsellers navigation={props.navigation}/>
    }
    default:
        return <View></View>
  }
}

export default HomeChild

const styles = StyleSheet.create({})