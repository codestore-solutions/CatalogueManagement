import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ImageComp from './ImageComp';
import Sample from '../Assets/Images/sampleProductImage.png';
import {theme} from '../Constants/theme';

const ProductCard = (props: {url: string}) => {
  return (
    <View style={styles.body}>
      <Image resizeMode="contain" style={styles.image} source={Sample} />
      {/* <ImageComp
        resizeMode="contain"
        imageStyle={styles.image}
        url={props.url}
      /> */}
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  body: {
    width: theme.width,
    height: theme.width,
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: '#F1F3F6',
  },
  image: {
    height: '80%',
    width: '80%',
    alignSelf: 'center',
    position: 'relative',
  },
});
