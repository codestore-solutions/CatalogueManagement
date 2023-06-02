import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import DeliveryCard from '../../Components/DeliveryCard';
import Bill from '../../Components/bill';
import CartList from '../../Components/CartList';
import UserServices from '../Services/UserServices';

const BuyNow = (props:{route:any}) => {
  let data = [];
  let total = 0;
  const root = props.route.params;
  
  // if (root.root == 'cart') {
  //   data = UserServices.getCart();
  // } else {
  //   data = UserServices.getCart('').splice(1, 1);
  // }
  // data.map(item => {
  //   total += item.price;
  // });

  return (
    <View style={{height: '100%'}}>
      <ScrollView>
        <View>
          <DeliveryCard />
          <CartList data={[]} />
          <Bill items={data.length} total={total} />
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              textAlign: 'center',
              marginBottom: 110,
            }}>
            Expected Delivery: 4 to 5 days
          </Text>
        </View>
      </ScrollView>
      <View style={styles.foot}>
        <Text style={{color: 'white', fontSize: 22}}>Proceed To Pay</Text>
      </View>
    </View>
  );
};

export default BuyNow;

const styles = StyleSheet.create({
  foot: {
    backgroundColor: 'black',
    height: 80,
    margin: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    position: 'absolute',
    alignSelf: 'center',
    top: '85%',
    paddingHorizontal: 75,
  },
});
