import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import LikeIcon from './LikeIcon';
import LikeButton from './LikeButton';
import ProductServices from '../CatalogueModule/Services/ProductsServices';

const WishlistGridChild = (props: {
  items: number;
  name: string;
  prodID: number;
  wishId: number;
  price: number;
}) => {
  const [liked, setliked] = useState(false);

  const [items, setitems] = useState(props.items)
  async function setData() {
    
    setliked(true);
    setitems(items+1);
    await ProductServices.addToWishlists(
      5,
      props.prodID,
      props.wishId,
      props.price,
    );
  }
  return (
    <TouchableOpacity
      style={styles.body}
      onPress={() => {
        setData();
      }}>
      <View style={styles.like}>
        <LikeButton selected={liked} />
      </View>
      <View style={styles.itemBox}>
        <Text style={styles.item}>{items}</Text>
        <Text style={{color: '#7E8299'}}> Items added</Text>
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};

export default WishlistGridChild;

const styles = StyleSheet.create({
  body: {
    height: 107,
    width: 165,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
  },
  like: {
    alignItems: 'flex-end',
  },
  item: {
    fontSize: 32,
    fontWeight: '700',
    color: '#7E8299',
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
});
