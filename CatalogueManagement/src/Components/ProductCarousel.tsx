import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import ProductCard from './ProductCard';

const ProductCarousel = (props: {Attachment: string[]}) => {
  
  return (
    <View>
      {/* <View style={styles.leftArrow}></View>
      <View></View>
      <View></View> */}
      <FlatList
        data={props.Attachment}
        horizontal={true}
        centerContent
        renderItem={({item, index}) => (
          <ProductCard url={item} />
        )}
      />
    </View>
  );
};

export default ProductCarousel;

const styles = StyleSheet.create({
  leftArrow: {
    position: 'absolute',
    width: 30,
    height: 30,
    backgroundColor: '#E5E7EA',
    borderRadius: 5,
    left:20,
    top:'50%'
  },
  rightArrow:{
    position: 'absolute',
    width: 30,
    height: 30,
    backgroundColor: '#E5E7EA',
    borderRadius: 5,
    right:20,
    top:'50%'
  }
});
