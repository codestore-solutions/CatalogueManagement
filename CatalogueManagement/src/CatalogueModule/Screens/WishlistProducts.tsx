import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductListCard from '../../Components/ProductListCard';
import ProductServices from '../Services/ProductsServices';
import WishlistProductWrapper from '../../Components/WishlistProductWrapper';
import HeartIconSvg from '../../Components/HeartIconSvg';
import {useRoute} from '@react-navigation/native';

const WishlistProducts = () => {
  const route = useRoute();

  return (
    <View style={styles.body}>
      {/* to fix this flatlist data params */}
      {/* <FlatList
        data={route.params}
        renderItem={({item}) => (
          <WishlistProductWrapper
            setState={setstate}
            state={state}
            wId={props.route.params[1]}
            prodId={item.productId}
            navigation={props.navigation}
          />
        )}
      /> */}
    </View>
  );
};

export default WishlistProducts;

const styles = StyleSheet.create({
  body: {backgroundColor: 'white', height: '100%'},
});
