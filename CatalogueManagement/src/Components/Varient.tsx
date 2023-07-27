import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { PrimaryColor, SecondaryColor } from '../Constants/colors';
import ImageComp from './ImageComp';

type propType = {
  image: string;
  title: string;
  price: number;
  selected: boolean;
};
const Varient = (props: propType) => {
  return (
    <View style={[styles.varient,{borderColor: props.selected? PrimaryColor:'rgba(234, 234, 234, 1)'}]}>
      <ImageComp
        imageStyle={{height: 100, width: 100, resizeMode: 'contain',marginTop:5}}
        url={props.image}
      />
      <View style={styles.details}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.price}>₹{props.price}</Text>
      </View>
    </View>
  );
};

export default Varient;

const styles = StyleSheet.create({
  varient: {
    width: 103,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  title:{
    fontSize:14,
    fontWeight:'500',
    color:'rgba(0, 0, 0, 1)'
  },
  price:{
    fontSize:16,
    fontWeight:'500',
    color:'rgba(0, 0, 0, 1)'
  },
  details:{
    width:'100%',
    justifyContent:'flex-start',
    marginLeft:10
  }
});
