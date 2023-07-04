import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import ProductServices from '../Services/ProductsServices';
import WishlistChild from '../../Components/WishlistChild';
import WishlistTag from '../../Components/WishlistTag';

const Wishlist = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {

  const [data, setdata] = useState<
    {collectionName: string; wishlistCollectionId: number; wishlistItems:{productId:number}[]}[]
  >([]);

  const [stae, setstae] = useState(true);

  async function getData() {
    await ProductServices.getWishlists().then(res => {
      setdata(res?.data.data);
    });
  }

  useEffect(() => {
    getData();
  }, [stae]);

  if (data.length == 0) {
  } else {
    return (
      <View style={styles.body}>
        <FlatList
          data={data}
          extraData={stae}
          renderItem={({item, index}) => (
            <WishlistTag
              state={setstae}
              title={item.collectionName}
              id={item.wishlistCollectionId}
              navigation={props.navigation}
              items={item.wishlistItems}
            />
          )}
        />
      </View>
    );
  }
};

export default Wishlist;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    height: '100%',
  },
});
