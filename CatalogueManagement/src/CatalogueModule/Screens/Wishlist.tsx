import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import ProductServices from '../Services/ProductsServices'
import WishlistChild from '../../Components/WishlistChild'

const Wishlist = () => {
  const [data, setdata] = useState([])

  async function getData(){
    let res =await ProductServices.getWishlist()
    .then(res => {return res});
    setdata(res?.data.productIds)
  }
 
  useEffect(() => {
    getData();
  }, [])
  
  return (
   <View style={styles.body}>
   </View>
  )
}

export default Wishlist

const styles = StyleSheet.create({
  body:{
    backgroundColor:'white',
    height:'100%'
  }
})