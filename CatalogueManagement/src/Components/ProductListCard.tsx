import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LikeButton from './LikeButton';
import Divider from './Divider';
import { PrimaryColor } from '../Constants/colors';

const ProductListCard = (props: {
  item: {
    id: string | number;
    attachment: string;
    name: string;
    price: string;
    rating: number;
  };
  navigation: {navigate: (arg: string, arg0: Object) => void};
  onLike:any
}) => {
  return (
    <View>
      <Divider width={'100%'}/>
      <View style={styles.body}>
        <Image style={styles.image} source={{uri: props.item.attachment}} />
        <TouchableOpacity style={{width: '60%',justifyContent:'space-between',paddingTop:10}}
        onPress={() => {
          props.navigation.navigate('Product', props.item.id);
        }}
        >
          <Text numberOfLines={3} style={styles.name}>
            {props.item.name}
          </Text>

          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={styles.priceBox}>
              ₹{props.item.price}/-
            </Text>
            <Text style={{textDecorationLine:'line-through',marginHorizontal:10}}>
            ₹{props.item.price}/-
            </Text>
            <Text style={{color:PrimaryColor}}>(37% OFF)</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={props.onLike}
        >
        <LikeButton selected={false} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductListCard;

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',

  },
  image: {
    height: 100,
    width: 90,
    marginRight: 20,
    resizeMode: 'contain',
    borderRadius: 15,
  },
  priceBox: {
    fontSize: 20,
    color: 'black',
    fontWeight:'600'
  },
  price:{

  },
  name:{
    fontSize:13,
    fontWeight:'300',
    color:'#777777'
  }
});
