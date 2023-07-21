import { StyleSheet, Text, View,TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Home_Header from '../../Components/Home_Header'
import HeaderIcons from '../../Components/HeaderIcons'
import AdBanner from '../../Components/AdBanner'
import {PillButton} from 'react-native-widgetsui'
import ErrorScreen from './ErrorScreen'
import Recommended from '../../Components/Recommended'
import  webSocket from "../../utils/socket";
import Socket from '../../utils/socket'
import HomeChild from '../../Components/HomeChild'
import API from '../Services/API_Services'
import SvgComponent from '../../Components/TabBarIcons/HomeIcon'
import ProductServices from '../Services/ProductsServices'
import OrderServices from '../../OrderProcessing/Services/OrderServices'

const Products = (props: { navigation: { navigate: (arg0: string) => void } }) => {

  let visible = true;
  let data = API.getHomeScreen();

  useEffect(() => {
    console.log('Home Loaded::');
  // Socket();
  }, [])
  
  if(visible){
    return (
      <ScrollView style ={styles.body}>
        <Home_Header navigation={props.navigation}/>
        <HeaderIcons                                                    
        navigation={props.navigation}
        />
         {/* <AdBanner
         navigation={props.navigation}
         />
         <Recommended/>
         <AdBanner
         navigation={props.navigation}
         /> */}
        <FlatList
        scrollEnabled = {false}
        data={data}
        renderItem={({item})=>
         <HomeChild
         type={item.type}
         navigation={props.navigation}
         />
      }
        />
      </ScrollView>
    )
  }
  else{
    return <View></View>
  }
}
                             
export default Products

const styles = StyleSheet.create({
   body:{
    backgroundColor:'white',
    height:'100%'
   }
})

