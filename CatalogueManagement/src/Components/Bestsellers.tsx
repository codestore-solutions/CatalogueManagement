import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GridCard from './GridCard';
import API from '../Services/API_Services';

const Bestsellers = (props: { navigation: { navigate: (arg0: string) => any; }; }) => {
  const data = API.getProductDetails('');
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
            onPress={()=>{props.navigation.navigate('ProductsGrid')}}
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
