import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ProductListCard = (props: {
  item: {id: string; image: string; title: string; price: string;};
  navigation: {navigate: (arg: string, arg0: Object) => void};
}) => {
  
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('Product', props.item);
      }}>
      <View style={styles.body}>
        <Image style={styles.image} source={{uri: props.item.image}} />
        <View style={{width: '60%'}}>
          <Text numberOfLines={3} style={{fontSize: 20}}>
            {props.item.title}
          </Text>
          <Text>₹{props.item.price}/-</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductListCard;

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    elevation: 40,
    borderRadius: 25,
  },
  image: {
    height: 110,
    width: 90,
    marginRight: 20,
  },
});
