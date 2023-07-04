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
import CutIcon from './CutIcon';
import Divider from './Divider';
import WishlistGridChild from './WishlistGridChild';

const AddToWishlist = (
  props: {visible: boolean; setVisible: (arg0: boolean) => void;prodId: number;price:number},
  
) => {
  const [data, setdata] = useState<
    {collectionName: string; wishlistCollectionId: number,wishlistItems:[]}[]
  >([]);


  async function getData() {
    await ProductServices.getWishlists().then(res => {
      setdata(res?.data.data);
    });
  }

 

  useEffect(() => {
    getData();
  }, [props.visible]);
  
  return (
    <Modal visible={props.visible} transparent={true}>
      <View style={styles.body}>
       <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>Select Wishlist</Text>
            <TouchableOpacity
              onPress={()=>{props.setVisible(!props.visible)}}
            >
              <CutIcon/>
            </TouchableOpacity>
          </View>
          <Divider width={'100%'}/>
          <View style={styles.content}>
            {data.length>0? 
            <FlatList
            data={data}
            numColumns={2}
            renderItem={({item,index})=>(
              <WishlistGridChild
                items={data[index].wishlistItems.length}
                name={data[index].collectionName}
                wishId={data[index].wishlistCollectionId}
                prodID={props.prodId}
                price={props.price}
              />
            )}
            />:
            <View></View>
          }
          </View>
       </View>
      </View>
    </Modal>
  );
};

export default AddToWishlist;

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor:'rgba(0, 0, 0, 0.5)'
  },
  title:{
    fontSize:18,
    fontWeight:'600',
    color:'#000000',
  },
  card:{
    backgroundColor:'white',
    padding:20,
    height:'60%',
    bottom:0,
    position:'absolute',
    width:'100%'
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:20
  },
  content:{
    justifyContent:'center',
    alignItems:'center'
  }
});
