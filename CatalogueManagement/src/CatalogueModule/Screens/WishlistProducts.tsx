import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductListCard from '../../Components/ProductListCard';

const WishlistProducts = () => {
 
  return(
    <FlatList
    data={Array(8)}
    renderItem={()=>(
        // <ProductListCard/>
    )}
    />
  );
}

export default WishlistProducts

const styles = StyleSheet.create({})