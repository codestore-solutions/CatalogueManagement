import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image, ImageBackground} from 'react-native';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import LikeButton from './LikeButton';

type proptype = {
  url: string;
  title: string;
  rating: string | number;
  price: number | string;
  likeEnabled: boolean;
  liked: boolean;
  onPress: any
};

const GridCard = (props: proptype) => {
  const like = props.likeEnabled ? (
    <LikeButton selected={props.liked} />
  ) : (
    <View></View>
  );
  return (
    <TouchableOpacity style={styles.body}
    onPress={props.onPress}
    >
      <View style={styles.imageBox}>
      <ImageBackground source={{uri: props.url}} imageStyle={styles.image}>
        <View style={styles.like}>{like}</View>
      </ImageBackground>
      </View>
      <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
      <StarRatingDisplay
        rating={Number(props.rating)}
        starSize={15}
        style={styles.rating}
      />
      <View style={styles.priceBar}>
        <Text style={styles.mrp}>{props.price}</Text>
        <Text style={styles.price}>{props.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GridCard;

const styles = StyleSheet.create({
  body: {
    height: 246,
    width: 190,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 10,
    elevation: 3,
    backgroundColor: '#FFFFFF',
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#F1F3F6',
    height:164,
    resizeMode:'center'
  },
  imageBox:{
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#F1F3F6',
    height:164,
    width:190
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    marginLeft: 20,
  },
  rating: {
    marginLeft: 14,
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight: '400',
    color: '#000000',
  },
  mrp: {
    fontSize: 16,
    marginHorizontal: 20,
    marginVertical: 5,
    textDecorationLine: 'line-through',
  },
  priceBar: {
    flexDirection: 'row',
  },
  like: {
    alignSelf: 'flex-end',
    margin: 15,
  },
});
