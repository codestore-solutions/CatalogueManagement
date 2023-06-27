import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import ProductServices from '../Services/ProductsServices'
import WishlistChild from '../../Components/WishlistChild'
import WishlistTag from '../../Components/WishlistTag'

const Wishlist = () => {
  const [data, setdata] = useState<{collectionName:string,wishlistCollectionId:number}[]>([])

  async function getData(){
    await ProductServices.getWishlists()
    .then(res => {setdata(res?.data.data)})
    
    console.log(data);
  }
 
  useEffect(() => {
    getData();
  }, [])
  
  if(data.length == 0){

  }
  else{
    return (
      <View style={styles.body}>
         <FlatList
         data={data}
         renderItem={({item,index})=>(<WishlistTag title={item.collectionName}/>)}
         />
      </View>
     )
  }
}

export default Wishlist

const styles = StyleSheet.create({
  body:{
    backgroundColor:'white',
    height:'100%'
  }
})