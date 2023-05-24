import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import UserServices from '../CatalogueModule/Services/User_Services';

const FooterButtons = (props: {
  navigation: {navigate: (arg0: string,{}) => void};
  id:string
}) => {
  
  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={styles.right}
        onPress={() => {
          UserServices.addToCart(props.id);
          props.navigation.navigate('Cart',{})}}>
        <View style={styles.left}>
          <Text style={styles.text}>Add To Cart</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.right}
        onPress={() => props.navigation.navigate('Buynow',{root:''})}>
        <View>
          <Text style={styles.text}>Buy Now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FooterButtons;

const styles = StyleSheet.create({
  body: {
    position:'absolute',
    flexDirection:'row',
    height:60,
    backgroundColor:'white',
    bottom:0,
  },
  left: {
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
