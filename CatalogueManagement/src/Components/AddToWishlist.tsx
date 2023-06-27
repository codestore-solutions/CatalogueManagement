import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductServices from '../CatalogueModule/Services/ProductsServices';
import WishlistTag from './WishlistTag';
import AddWishlistButton from './AddWishlistButton';
import {PrimaryColor} from '../Constants/colors';

const AddToWishlist = (
  props: {visible: boolean; setVisible: (arg0: boolean) => void;prodId: number;price:number},
  
) => {
  const [data, setdata] = useState<
    {collectionName: string; wishlistCollectionId: number}[]
  >([]);

  const [show, setshow] = useState(props.visible);
  async function getData() {
    await ProductServices.getWishlists().then(res => {
      setdata(res?.data.data);
    });

    console.log(data);
  }

  async function addtoWishlist(wid:number,prodID:number,price:number) {
    props.setVisible(!props.visible)
    await ProductServices.addToWishlists(5,prodID,wid,price);
    
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <Modal visible={props.visible} transparent={true}>
      <View style={styles.body}>
        <AddWishlistButton />
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <TouchableOpacity
                onPress={()=>{addtoWishlist(item.wishlistCollectionId,props.prodId,props.price)}}
            >
              <WishlistTag title={item.collectionName} />
            </TouchableOpacity>
          )}
        />

        <Button
          title="Back"
          color={PrimaryColor}
          onPress={() => {
            props.setVisible(!props.visible);
          }}
        />
      </View>
    </Modal>
  );
};

export default AddToWishlist;

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: 'white',
  },
});
