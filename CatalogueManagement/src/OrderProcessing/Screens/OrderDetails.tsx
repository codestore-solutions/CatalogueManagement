import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Divider from '../../Components/Divider';
// import API from '../../Services/API_Services';
import {COLORS} from '../../Constants/colors';
import OrderServices from '../Services/OrderServices';
import {useNavigation, useRoute} from '@react-navigation/native';
import ProductServices from '../../CatalogueModule/Services/ProductsServices';
import Clipboard from '@react-native-clipboard/clipboard';
import InAppBrowser from 'react-native-inappbrowser-reborn';

const OrderDetails = () => {
  const navigation = useNavigation<any>();
  const route: any = useRoute();
  const [feedbackUrl, setFeedbackUrl] = useState('');
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
    userId: number;
  }>(Object);

  const data = {
    category: 'Electronics',
    subCategory: 'Mobile',
    Name: 'Google Pixel 6a (Charcoal, 128 GB) (6 GB RAM)',
    Varients: [
      {
        description:
          'Experience intuitiveness and enjoy seamless operation with smooth transition with the 5G-ready Google Pixel 6a that comes bundled with a myriad of innovative features.',
        price: '₹27,999',
        available: true,
        rating: 4.5,
      },
    ],
    Attachment: [
      'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70',
      'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/r/9/t/-original-imaggbrb3gyagad8.jpeg?q=70',
      'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/y/b/t/-original-imaggbrbkxzra38y.jpeg?q=70',
      'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/r/s/c/-original-imaggbrb42866wgx.jpeg?q=70',
      'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/p/l/m/-original-imaggbrbkzgzffez.jpeg?q=70',
    ],
  };
  console.log(data);

  async function getData() {
    let res = await OrderServices.getOrderDetails(route.params.id);
    setorder(res.data.data[0]);
    ProductServices.getFeedbackURL({
      authorId: res.data.data[0].userId,
      entityId: res.data.data[0]?.orderItems[0]?.productId,
      entityName: data.Name,
      authorName: 'Ramesh Kapoor',
    })
      .then((res: any) => {
        setFeedbackUrl(res.data.response);
      })
      .catch(console.log);
    console.log('order ::', res.data.data[0]);
  }

  useEffect(() => {
    getData();
  }, []);

  if (Object.keys(order).length > 0) {
    return (
      <View>
        <ScrollView style={styles.body}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text style={{}}>Order Date</Text>
            <Text style={{fontSize: 18, color: 'black'}}>
              {order.createdDate.split('T')[0]}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text style={{}}>Order #</Text>
            {/* to fix below line */}
            <Text style={{fontSize: 18, color: 'black'}}>
              {route.params?.toString()}
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
          {/* <Divider width={'100%'} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginVertical: 10,
            }}>
            <TouchableOpacity
              style={[styles.right, {backgroundColor: '#7e72ff'}]}
              onPress={() =>
                navigation.navigate('FeedbackWebView', {
                  autherId: '',
                  entityId: '',
                  entityName: '',
                })
              }>
              <View>
                <Text style={[styles.text, {color: 'white'}]}>Feedback</Text>
              </View>
            </TouchableOpacity>
          </View> */}
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
          <View style={{flexDirection: 'row', gap: 20}}>
            {feedbackUrl && (
              <>
                <Text
                  style={styles.feedback}
                  onPress={async () => {
                    // navigation.navigate('Feedback', {
                    //   feedbackUrl: feedbackUrl,
                    // });
                    if (await InAppBrowser.isAvailable()) {
                      InAppBrowser.open(feedbackUrl);
                    } else {
                      Linking.openURL(feedbackUrl).catch(err =>
                        console.error("Couldn't load page", err),
                      );
                    }
                  }}>
                  Write a feedback
                </Text>

                <Text
                  style={styles.feedback}
                  onPress={() => {
                    Clipboard.setString(feedbackUrl);
                  }}>
                  Copy Link
                </Text>
              </>
            )}
          </View>
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
              <Text style={{fontSize: 18, color: 'black'}}>
                ₹{order.orderItems[0].price}
              </Text>
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
              <Text style={{fontSize: 18, color: 'black'}}>
                ₹{order.deliveryCharges}
              </Text>
            </View>

            <Divider width={'100%'} />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <Text style={{}}>Toatl Amount</Text>
              <Text style={{fontSize: 18, color: 'black'}}>
                ₹{order.orderItems[0].price + order.deliveryCharges}
              </Text>
            </View>
          </View>
          <View style={{height: 100}}></View>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.right, {backgroundColor: '#CCCCCC'}]}
            onPress={() => navigation.navigate('CancelOrder')}>
            <View>
              <Text style={[styles.text, {color: 'white'}]}>Cancel Order</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.right, {backgroundColor: '#7e72ff'}]}
            onPress={() => navigation.navigate('OrderTracking')}>
            <View>
              <Text style={[styles.text, {color: 'white'}]}>Track Order</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return <></>; //to add loader or something
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
    color: COLORS.PrimaryColor,
  },
});
