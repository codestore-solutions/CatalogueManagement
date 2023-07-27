import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductListCard from '../../Components/ProductListCard';
import ProductServices from '../Services/ProductsServices';
import WishlistProductWrapper from '../../Components/WishlistProductWrapper';
import HeartIconSvg from '../../Components/HeartIconSvg';

const WishlistProducts = (props: {
  route: {params: any};
  navigation: {navigate: (arg: string, arg0: Object) => void};

 
}) => {
  const [state, setstate] = useState(true);

  useEffect(() => {
    
  }, [state])
  
  return (
    <View style={styles.body}>
      <FlatList
        data={props.route.params[0]}
        renderItem={({item}) => (
          <WishlistProductWrapper
            setState={setstate}
            state={state}
            wId={props.route.params[1]}
            prodId={item.productId}
            navigation={props.navigation}
          />
        )}
      />
    </View>
  );
};

export default WishlistProducts;

const styles = StyleSheet.create({
  body: {backgroundColor: 'white', height: '100%'},
});
