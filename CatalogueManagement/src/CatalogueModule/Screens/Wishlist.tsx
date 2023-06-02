import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Scaffold from '../../Widgets/Scaffold'
import ProductServices from '../Services/ProductsServices'
import { ListTile } from 'react-native-widgetsui'
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
   <View>
     <FlatList
     data={data}
     renderItem={({item})=>
        <WishlistChild
        prodID={item}
        />
     }
     />
   </View>
  )
}

export default Wishlist

const styles = StyleSheet.create({})