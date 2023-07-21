import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Divider from '../../Components/Divider';
import API from '../../Services/API_Services';
import {PrimaryColor} from '../../Constants/colors';
import OrderServices from '../Services/OrderServices';

const OrderDetails = (props: {
  navigation: {navigate: (arg0: string) => void};
  route:{params:any}
}) => {
  let data = API.getProductDetails('');
console.log();

  const [order, setorder] = useState<{
    orderItems: {
      orderItemsId: number;
      productId: number;
      varientId: number;
      price: number;
      discount: number;
      quantity: number;
      orderStatus: number;
    }[];
    shippingAddressId: number;
    productCount: number;
    vendorId: number;
    deliveryCharges: number;
    paymentId: number;
    createdDate: string;
    updatedOn: string;
    deliveryDate: string;
  }>(Object);

  async function getData() {
    let res = await OrderServices.getOrderDetails(props.route.params);
    setorder(res.data.data[0]);
    console.log('order ::',order);
    
  }

  useEffect(() => {
    getData();
  }, [])
  
  if(Object.keys(order).length>0){return (
    <View>
      <ScrollView style={styles.body}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text style={{}}>Order Date</Text>
          <Text style={{fontSize: 18, color: 'black'}}>{order.createdDate.split('T')[0]}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text style={{}}>Order #</Text>
          <Text style={{fontSize: 18, color: 'black'}}>
            {props.route.params}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text style={{}}>Order Total</Text>
          <Text style={{fontSize: 18, color: '#34A893'}}>
            ₹{order.orderItems[0].price} (1 item)
          </Text>
        </View>
        <Divider width={'100%'} />
        <Text style={{fontSize: 20, color: 'black', marginVertical: 15}}>
          Shipment Details
        </Text>
        <Text style={{fontSize: 14, color: 'black'}}>dispatched</Text>
        <Text style={{color: '#7E72FF'}}>Arriving by Monday</Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Image
            source={{uri: data.Attachment[0]}}
            style={{height: 100, width: 100}}
          />
          <View style={{width: '65%'}}>
            <Text
              numberOfLines={2}
              style={{fontSize: 18, color: 'black', marginBottom: 10}}>
              {data.Name}
            </Text>
            <Text>Qty: 1</Text>
          </View>
        </View>
        <Text
          style={styles.feedback}
          onPress={() => {
            props.navigation.navigate('Feedback');
          }}>
          Write a feedback
        </Text>
        <Divider width={'100%'} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <View style={{width: '45%'}}>
            <Text style={{fontSize: 20, color: 'black', marginVertical: 15}}>
              Billing Address
            </Text>
            <Text style={{fontSize: 14, color: 'black'}}>
              G-18 Noida sector - 63 Near Fortis Hospital Noida, Uttar Pradesh
              2013021
            </Text>
          </View>
          <View style={{width: '45%', alignItems: 'flex-end'}}>
            <Text style={{fontSize: 20, color: 'black', marginVertical: 15}}>
              Shipping Address
            </Text>
            <Text style={{fontSize: 14, color: 'black', textAlign: 'right'}}>
              G-18 Noida sector - 63 Near Fortis Hospital Noida, Uttar Pradesh
              2013021
            </Text>
          </View>
        </View>
        <Divider width={'100%'} />
        <Text style={{fontSize: 18, color: 'black', marginVertical: 10}}>
          Price Details
        </Text>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text style={{}}>Total MRP</Text>
            <Text style={{fontSize: 18, color: 'black'}}>₹{order.orderItems[0].price}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text style={{}}>Quantity</Text>
            <Text style={{fontSize: 18, color: 'black'}}>x1</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text style={{}}>Discount</Text>
            <Text style={{fontSize: 18, color: 'black'}}>₹0.0</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text style={{}}>Delivery Charges</Text>
            <Text style={{fontSize: 18, color: 'black'}}>₹{order.deliveryCharges}</Text>
          </View>

          <Divider width={'100%'} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text style={{}}>Toatl Amount</Text>
            <Text style={{fontSize: 18, color: 'black'}}>₹{order.orderItems[0].price + order.deliveryCharges}</Text>
          </View>
        </View>
        <View style={{height: 100}}></View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.right, {backgroundColor: '#CCCCCC'}]}
          onPress={() => props.navigation.navigate('CancelOrder')}>
          <View>
            <Text style={[styles.text, {color: 'white'}]}>Cancel Order</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.right, {backgroundColor: '#7e72ff'}]}
          onPress={() => props.navigation.navigate('OrderTracking')}>
          <View>
            <Text style={[styles.text, {color: 'white'}]}>Track Order</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );}
};

export default OrderDetails;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    height: '100%',
    paddingHorizontal: 20,
  },
  footer: {
    position: 'absolute',
    height: 65,
    width: '100%',
    backgroundColor: 'white',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  right: {
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 6,
    height: 40,
    width: 180,
  },
  text: {
    fontSize: 18,
  },
  feedback: {
    color: PrimaryColor,
  },
});
