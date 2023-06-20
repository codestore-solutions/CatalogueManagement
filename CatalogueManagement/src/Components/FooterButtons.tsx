import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import UserServices from '../CatalogueModule/Services/UserServices';

const FooterButtons = (props: {
  navigation: {navigate: (arg0: string, {}) => void};
  id: string|number;
  vid: string|number;
  qty: number;
  price:number
}) => {
  return (
    <View style={styles.body}>
      <TouchableOpacity
        onPress={async() => {
         await UserServices.addToCart(props.id,props.vid,props.qty);
          props.navigation.navigate('Cart', {qty:props.qty,id:props.id});
        }}>
        <View style={styles.left}>
          <Text style={styles.text}>Add To Cart</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.right}
        onPress={() => props.navigation.navigate('Payment', [{id:props.id,qty:props.qty,price:props.price,vid:props.vid}])}>
        <View>
          <Text style={[styles.text, {color: 'white'}]}>Buy Now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FooterButtons;

const styles = StyleSheet.create({
  body: {
    position: 'absolute',
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  left: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  right: {
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#7E72FF',
    paddingVertical: 6,
  },
  text: {
    fontSize: 18,
  },
});
