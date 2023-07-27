import {StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductListCard from './ProductListCard';
import ProductServices from '../CatalogueModule/Services/ProductsServices';

const WishlistProductWrapper = (props: {
  wId: number;
  prodId: number;
  navigation: {navigate: (arg: string, arg0: Object) => void};
  state: boolean;
  setState: (arg: boolean) => void;
}) => {
  console.log(props.prodId);

  const [data, setdata] = useState<{
    name: string;
    varients: {attachment: string; price: number}[];
  }>(Object);

  async function getData() {
    await ProductServices.getProduct(props.prodId).then(res => {
      setdata(res?.data);
    });
    // console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  async function deleteProd() {
    await ProductServices.deleteProductFromWishlist(
      props.wId,
      props.prodId,
    ).then(res => Alert.alert('deleted'));
    props.setState(!props.state);
  }

  if (Object.keys(data).length > 0) {
    return (
      <ProductListCard
        item={{
          id: props.prodId,
          attachment: data.varients[0].attachment[0],
          name: data.name,
          price: data.varients[0].price.toString(),
          rating: 4,
        }}
        onLike={() => {
          deleteProd();
        }}
        liked={true}
        navigation={props.navigation}
      />
    );
  } else {
    return <Text></Text>;
  }
};

export default WishlistProductWrapper;

const styles = StyleSheet.create({});
