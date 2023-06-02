import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import ProductServices from '../CatalogueModule/Services/ProductsServices';
import API from '../CatalogueModule/Services/API_Services';
import Svg, { Path } from 'react-native-svg';

const CartItem = (props: {
  id: string;
  quantity: number;
  setQuantity: (arg0: string, arg1: boolean, arg2: number) => void;
  remove: (arg0: string) => void
}) => {
  const data = API.getProductDetails('');
    return (
      <View style={styles.card}>
        <Image
        style = {styles.image}
        source={{uri:data.Attachment[0]}}
        />
        <View>
        <View style={{flexDirection:'row'}}>
        <Text numberOfLines={2}
        style={{fontSize:18,color:'black',width:'70%'}}
        >
          {data.Name}
        </Text>
        <View
        style={{alignItems:'center',justifyContent:'center',marginLeft:20}}
        >
        <Svg
      width={22}
      height={22}
      viewBox="0 0 19 19"
      fill="none"
      {...props}
    >
      <Path
        d="M2.375 4.75h14.25M6.333 4.75V3.167a1.583 1.583 0 011.584-1.584h3.166a1.583 1.583 0 011.584 1.584V4.75m2.375 0v11.083a1.583 1.583 0 01-1.584 1.584H5.542a1.583 1.583 0 01-1.584-1.584V4.75h11.084zM7.917 8.708v4.75M11.083 8.708v4.75"
        stroke="#999"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
        </View>
        </View>
        <View style={{flexDirection:'row'}}>
        <View style={styles.varientCard}>
        <Text>Varient :</Text>
        <Text style={{color:'black',fontWeight:'500'}}>Charcoal</Text>
        </View>
        <View>
          <Text style={{fontSize:20}}>Qty.</Text>
          <View></View>
        </View>
        </View>
        </View>
      </View>
    );
  }


export default CartItem;

const styles = StyleSheet.create({
  varientCard:{
    backgroundColor:'#F1F3F6',
   flexDirection:'row',
   marginVertical:5,
   padding:5,
   borderRadius:5
  },
  card: {
    marginVertical:20,
    flexDirection:'row'
  },
  image: {
    height: 100,
    width: 100,
    borderRadius:5,
    marginRight:20
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
