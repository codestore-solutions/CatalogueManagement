import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LikeButton from './LikeButton';
import Divider from './Divider';
import {COLORS} from '../Constants/colors';
import StarRating from 'react-native-star-rating-widget';
import StarIcon from './StarIcon';
import ImageComp from './ImageComp';

const ProductListCard = (props: {
  index: number;
  item: {
    id: string | number;
    attachment: string;
    name: string;
    price: string;
    rating: number;
  };
  navigation: {navigate: (arg: string, arg0: Object) => void};
  onLike: any;
  liked: boolean;
}) => {
  return (
    <View>
      {/* Divider dividing items */}
      <Divider width={'92%'} />
      {/* Item body start */}
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Product', {id: props.item.id});
        }}
        style={styles.body}>
        <ImageComp
          resizeMode="contain"
          imageStyle={styles.image}
          url={props.item.attachment}
        />
        <View style={{flexShrink: 1, flexGrow: 1}}>
          <Text numberOfLines={2} style={styles.name}>
            {props.item.name} T100 Bluetooth Truly Wireless Earbuds with Mic, AI
            ENC
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
              flexWrap: 'wrap',
            }}>
            <Text style={styles.priceBox}>₹{props.item.price}/-</Text>
            <Text
              style={{
                textDecorationLine: 'line-through',
                marginHorizontal: 10,
              }}>
              ₹{props.item.price}/-
            </Text>
            <Text style={{color: COLORS.PrimaryColor, fontSize: 14}}>
              (37% OFF)
            </Text>
          </View>
          {/* <StarIcon/> */}
          <View style={styles.rating}>
            <StarRating
              rating={props.item.rating}
              onChange={() => {}}
              starSize={20}
            />
          </View>
        </View>
        <TouchableOpacity onPress={props.onLike} style={styles.like}>
          <LikeButton selected={props.liked} />
        </TouchableOpacity>
      </TouchableOpacity>
      {/* Item body End */}
    </View>
  );
};

export default ProductListCard;

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    padding: 15,
    paddingHorizontal: '4%',
  },
  image: {
    height: 91,
    width: 91,
    marginRight: 20,
    resizeMode: 'contain',
    borderRadius: 20,
    borderColor: '#eee',
    borderWidth: 1,
    padding: 5,
  },
  priceBox: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '700',
    fontFamily: 'Inter',
  },
  price: {},
  name: {
    fontSize: 14,
    fontWeight: '400',
    color: '#777777',
  },
  like: {
    marginTop: 18,
    height: 26,
    width: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rating: {
    marginBottom: 10,
  },
});
