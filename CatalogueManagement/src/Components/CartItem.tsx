import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import ProductServices from '../CatalogueModule/Services/Products_Services';

const CartItem = (props: {
  id: string;
  quantity: number;
  setQuantity: (arg0: string, arg1: boolean, arg2: number) => void;
  remove: (arg0: string) => void
}) => {
  const [data, setdata] = useState<{
    id: string;
    image: string;
    title: string;
    price: string;
  }>(Object);
  async function getData() {
    const data = await ProductServices.getProduct(props.id);
    // setdata(data);
  }
  if (data.title != undefined && data.title.length > 18) {
    data.title = data.title.slice(0, 18);
  }

  useLayoutEffect(() => {
    getData();
  }, []);
  if (data == undefined) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: data.image}} />
        <View>
          <Text style={styles.header}>{data.title}...</Text>
          <Text style={styles.header}>₹{data.price}</Text>
          <View style={styles.quantity}>
            <TouchableOpacity
              onPress={() => {
                if (props.quantity >= 2) {
                  props.setQuantity(props.id, false, props.quantity);
                }
                if(props.quantity <= 1){
                  props.remove(props.id);
                }
              }}>
              <Text style={{fontSize: 24}}>-</Text>
            </TouchableOpacity>
            <View>
              <Text style={{fontSize: 24}}>{props.quantity}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                props.setQuantity(props.id, true, props.quantity);
              }}>
              <Text style={{fontSize: 24}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bin}>
          <Text
            style={{textAlignVertical: 'center', fontSize: 22}}
            onPress={() => {
              props.remove(props.id);
            }}>
            🗑
          </Text>
        </View>
      </View>
    );
  }
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    height: 120,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    padding: 8,
    elevation: 8,
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
    marginRight: 8,
  },
  header: {
    fontSize: 18,
    margin: 2,
  },
  quantity: {
    width: 90,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 20,
    elevation: 5,
    backgroundColor: 'white',
    marginTop: 4,
    marginLeft: 5,
  },
  bin: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 8,
  },
});
