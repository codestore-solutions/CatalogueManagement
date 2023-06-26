import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ProductCard = (props: {url: string}) => {
  return (
    <View style={styles.body}>
      <Image style={styles.image} source={{uri: props.url}} />
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 30,
    position: 'relative',
  },
  image: {width: 300, height: 300, position: 'relative', resizeMode: 'contain'},
});
