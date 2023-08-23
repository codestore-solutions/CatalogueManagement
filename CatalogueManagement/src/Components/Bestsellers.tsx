import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GridCard from './GridCard';

const Bestsellers = (props: {
  navigation: {navigate: (arg0: string) => any};
}) => {
  const data = {
    category: 'Electronics',
    subCategory: 'Mobile',
    Name: 'Google Pixel 6a (Charcoal, 128 GB) (6 GB RAM)',
    Varients: [
      {
        description:
          'Experience intuitiveness and enjoy seamless operation with smooth transition with the 5G-ready Google Pixel 6a that comes bundled with a myriad of innovative features.',
        price: '₹27,999',
        available: true,
        rating: 4.5,
      },
    ],
    Attachment: [
      'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70',
      'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/r/9/t/-original-imaggbrb3gyagad8.jpeg?q=70',
      'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/y/b/t/-original-imaggbrbkxzra38y.jpeg?q=70',
      'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/r/s/c/-original-imaggbrb42866wgx.jpeg?q=70',
      'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/p/l/m/-original-imaggbrbkzgzffez.jpeg?q=70',
    ],
  };
  return (
    <View>
      <Text style={styles.text}>Bestsellers</Text>
      <FlatList
        style={styles.body}
        data={Array(4)}
        numColumns={2}
        scrollEnabled={false}
        renderItem={({item}) => (
          <GridCard
            title={data.Name.slice(0, 12)}
            url={data.Attachment[0]}
            rating={4}
            price={data.Varients[0].price}
            likeEnabled={true}
            liked={false}
            onPress={() => {
              props.navigation.navigate('ProductsGrid');
            }}
          />
        )}
      />
    </View>
  );
};

export default Bestsellers;

const styles = StyleSheet.create({
  body: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    marginLeft: 20,
  },
});
