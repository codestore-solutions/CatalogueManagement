import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import ProductCard from './ProductCard';
import LikeIcon from './LikeIcon';
import StarIcon from './StarIcon';

const ProductCarousel = (props: {Attachment: string[]; rating: number}) => {
  return (
    <View
      style={{
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        overflow: 'hidden',
      }}>
      {/* <View style={styles.leftArrow}></View>
      <View></View>
      <View></View> */}
      <View style={styles.rating}>
        <StarIcon />
        <Text style={styles.rate}>{props.rating.toFixed(1)}</Text>
        <Text style={styles.num}>(3.1k)</Text>
      </View>
      <FlatList
        data={props.Attachment}
        horizontal={true}
        centerContent
        renderItem={({item, index}) => <ProductCard url={item} />}
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
    left: 20,
    top: '50%',
  },
  rightArrow: {
    position: 'absolute',
    width: 30,
    height: 30,
    backgroundColor: '#E5E7EA',
    borderRadius: 5,
    right: 20,
    top: '50%',
  },
  like: {
    position: 'absolute',
    height: 37,
    width: 37,
    borderRadius: 37,
    backgroundColor: 'white',
    elevation: 1,
    right: 0,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rating: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  rate: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
  },
  num: {
    fontSize: 14,
    fontWeight: '400',
    color: '#999999',
  },
});
