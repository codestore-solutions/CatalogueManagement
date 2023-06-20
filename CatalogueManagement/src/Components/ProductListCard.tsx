import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ProductListCard = (props: {
  item: {id: string|number; attachment: string; name: string; price:string; rating:number};
  navigation: {navigate: (arg: string, arg0: Object) => void};
}) => {
  
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('Product', props.item.id);
      }}>
      <View style={styles.body}>
        <Image style={styles.image} source={{uri: props.item.attachment}} />
        <View style={{width: '60%'}}>
          <Text numberOfLines={3} style={{fontSize: 20}}>
            {props.item.name}
          </Text>

          <View style={styles.priceBox}>
          <Text style={{color:'black'}}>Starting From</Text>
          <Text style={{fontSize:18,color:'black'}}>₹{props.item.price}/-</Text>
          </View>
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
  priceBox:{
    padding:5,
    backgroundColor:'#CCCCCC',
    width:'60%',
    marginTop:5,
    borderRadius:5
  }
});
