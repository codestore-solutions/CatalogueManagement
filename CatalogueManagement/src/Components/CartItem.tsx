import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import ProductServices from '../CatalogueModule/Services/ProductsServices';
import API from '../CatalogueModule/Services/API_Services';
import Svg, {Path} from 'react-native-svg';
import Divider from './Divider';

const CartItem = (
  props:
    | {
        id: string | number;
        quantity: number;
        setQuantity: (arg0: string, arg1: boolean, arg2: number) => void;
        remove: (arg0: string) => void;
        setList: (
          arg: {id: number; vid: number; price: number; qty: number}[],
        ) => void;
        list: {id: number; vid: number; price: number; qty: number}[];
      }
    | any,
) => {
  const [data, setdata] = useState<{
    name: string;
    id: number;
    rating: number;
    varients: {
      id: number;
      productId: 0;
      description: string;
      isActive: boolean;
      price: number;
      availableStock: number;
    }[];
    attachments: {
      id: number;
      productId: number;
      isUploadedByAdmin: boolean;
      reviewId: number;
      attachmentURL: string;
    }[];
  }>(Object);

  async function getData() {
    const res = await ProductServices.getProduct(props.id);
    setdata(res?.data);
    props.setList(
      props.list.push({
        id: data.id,
        vid: data.varients[0].id,
        price: data.varients[0].price,
        qty: props.quantity,
      }),
    );
  }

  useEffect(() => {
    getData();
  }, []);

  if (Object.keys(data).length == 0) {
    return (
      <View
        style={{
          height: 130,
          width: '97%',
          backgroundColor: '#F1F3F6',
          borderRadius: 15,
          alignSelf: 'center',
          marginVertical: 10,
        }}></View>
    );
  } else {
    return (
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{uri: data.attachments[0].attachmentURL}}
        />
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text
              numberOfLines={2}
              style={{fontSize: 18, color: 'black', width: '70%'}}>
              {data.name}
            </Text>
            {/* Dustbin Icon */}
            <TouchableOpacity
              onPress={() => {
                props.remove(props.id);
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 20,
              }}>
              <Svg
                width={22}
                height={22}
                viewBox="0 0 19 19"
                fill="none"
                {...props}>
                <Path
                  d="M2.375 4.75h14.25M6.333 4.75V3.167a1.583 1.583 0 011.584-1.584h3.166a1.583 1.583 0 011.584 1.584V4.75m2.375 0v11.083a1.583 1.583 0 01-1.584 1.584H5.542a1.583 1.583 0 01-1.584-1.584V4.75h11.084zM7.917 8.708v4.75M11.083 8.708v4.75"
                  stroke="#999"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.varientCard}>
              <Text>Varient :</Text>
              <Text style={{color: 'black', fontWeight: '500'}}>Charcoal</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 20, marginLeft: 10}}>Qty.</Text>
              <View>
                <Text style={{fontSize: 20, marginLeft: 10}}>
                  {props.quantity}
                </Text>
              </View>
            </View>
          </View>
          <Text style={{fontSize: 20}}>Price: ₹{data.varients[0].price}/-</Text>
          <Text>
            <Text style={{color: 'black'}}>10 Days</Text> return available
          </Text>
        </View>
      </View>
    );
  }
};

export default CartItem;

const styles = StyleSheet.create({
  varientCard: {
    backgroundColor: '#F1F3F6',
    flexDirection: 'row',
    marginVertical: 5,
    padding: 5,
    borderRadius: 5,
  },
  card: {
    flexDirection: 'row',
    margin: 10,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginRight: 20,
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
