import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Home_Header from '../../Components/Home_Header'
import HeaderIcons from '../../Components/HeaderIcons'
import AdBanner from '../../Components/AdBanner'
import {PillButton} from 'react-native-widgetsui'
import ErrorScreen from './ErrorScreen'

const Products = (props: { navigation: { navigate: (arg0: string) => void } }) => {
  return (
    <View style ={styles.body}>
      <Home_Header/>
      <HeaderIcons
      navigation={props.navigation}
      />
       <AdBanner
       navigation={props.navigation}
       />
    </View>
  )
}

export default Products

const styles = StyleSheet.create({
   body:{
    backgroundColor:'white'
   }
})