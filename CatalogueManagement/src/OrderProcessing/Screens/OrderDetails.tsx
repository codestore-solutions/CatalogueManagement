import {
  ActivityIndicator,
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
import moment from 'moment';
import ImageComp from '../../Components/ImageComp';
import OrderedCompletedBanner from '../../Components/ReusableComponent/OrderedCompletedBanner';
import OrderingService from '../../services/OrderingService';
import CatalogueServices from '../../services/CatalogueServices';

const OrderDetails = () => {
  const navigation = useNavigation<any>();
  // const route: any = useRoute();
  const route: any = '';
  const [feedbackUrl, setFeedbackUrl] = useState('');
  const [order, setOrder] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>();

  async function getData() {
    const data = {
      category: 'Electronics',
      subCategory: 'Mobile',
      name: 'Google Pixel 6a (Charcoal, 128 GB) (6 GB RAM)',
      Name: 'Google Pixel 6a (Charcoal, 128 GB) (6 GB RAM)',
      varients: [
        {
          description:
            'Experience intuitiveness and enjoy seamless operation with smooth transition with the 5G-ready Google Pixel 6a that comes bundled with a myriad of innovative features.',
          price: '₹27,999',
          available: true,
          rating: 4.5,
          attachment: [
            'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/r/9/t/-original-imaggbrb3gyagad8.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/y/b/t/-original-imaggbrbkxzra38y.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/r/s/c/-original-imaggbrb42866wgx.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/p/l/m/-original-imaggbrbkzgzffez.jpeg?q=70',
          ],
        },
      ],
      attachment: [
        'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70',
        'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/r/9/t/-original-imaggbrb3gyagad8.jpeg?q=70',
        'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/y/b/t/-original-imaggbrbkxzra38y.jpeg?q=70',
        'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/r/s/c/-original-imaggbrb42866wgx.jpeg?q=70',
        'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/p/l/m/-original-imaggbrbkzgzffez.jpeg?q=70',
      ],
    };
    OrderingService.getOrderDetail(186)
      .then(res => {
        setOrder(res.data.data[0]);
        // CatalogueServices.getProductDetail(
        //   res.data.data[0].orderItems[0].productId,
        // )
        //   .then(res => {
        //     const data = res.data;
        setData(data);
        console.log(res.data.data);
        setIsLoading(false);
        ProductServices.getFeedbackURL({
          entityId: res.data.data[0]?.orderItems[0]?.productId,
          entityName: data.name,
        })
          .then((res: any) => {
            setFeedbackUrl(res.data.response);
          })
          .catch(console.log);
      })
      //     .catch(console.log);
      // })
      .catch(console.log);
    // console.log('order ::', res.data.data[0]);
  }

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) return <ActivityIndicator size={30} style={{padding: 50}} />;

  return (
    <View>
      <ScrollView style={styles.body}>
        {/* <OrderedCompletedBanner />
        <Divider width={'100%'} />
        <OrderedCompletedBanner paymentFailed /> */}
        <Divider width={'100%'} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text style={{}}>Order Date</Text>
          <Text style={{fontSize: 18, color: 'black', fontWeight: '800'}}>
            {moment(order.createdDate).format('Do-MMM-YYYY')}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text style={{}}>Order #</Text>
          <Text style={{fontSize: 18, color: 'black', fontWeight: '800'}}>
            {route.params?.id}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text style={{}}>Order Total</Text>
          <Text style={{fontSize: 18, color: '#34A893', fontWeight: '800'}}>
            ₹{order.orderItems[0].price} (1 item)
          </Text>
        </View>

        <Divider width={'100%'} />
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
        </View>
        <Divider width={'100%'} />
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            marginVertical: 15,
            fontWeight: '700',
          }}>
          Shipment Details
        </Text>
        <Text style={{fontSize: 14, color: 'black'}}>Dispatched</Text>
        <Text
          style={{
            color: '#7E72FF',
            fontSize: 15,
            paddingTop: 2,
            fontWeight: '700',
          }}>
          Arriving by Monday
        </Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <ImageComp
            resizeMode="contain"
            imageStyle={styles.image}
            url={data.varients[0].attachment[0]}
          />
          <View style={{width: '65%'}}>
            <Text
              numberOfLines={2}
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: 'black',
                marginBottom: 10,
              }}>
              {data.Name}
            </Text>
            <Text>Qty: 1</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 20,
            justifyContent: 'space-between',
            marginVertical: 10,
            marginTop: 20,
          }}>
          {feedbackUrl && (
            <>
              <Text
                style={styles.feedback}
                onPress={async () => {
                  navigation.navigate('Feedback', {
                    feedbackUrl: feedbackUrl,
                    name: 'Ramesh Kapoor',
                  });
                  // if (await InAppBrowser.isAvailable()) {
                  //   InAppBrowser.open(feedbackUrl);
                  // } else {
                  //   Linking.openURL(feedbackUrl).catch(err =>
                  //     console.error("Couldn't load page", err),
                  //   );
                  // }
                }}>
                Write a feedback
              </Text>

              <Text
                style={styles.feedback}
                onPress={() => {
                  Clipboard.setString(feedbackUrl);
                }}>
                Copy feedback link
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
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                marginVertical: 15,
                fontWeight: '700',
              }}>
              Billing Address
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                lineHeight: 22,
              }}>
              G-18 Noida sector - 63 Near Fortis Hospital Noida, Uttar Pradesh
              2013021
            </Text>
          </View>
          <View style={{width: '45%', alignItems: 'flex-end'}}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                marginVertical: 15,
                fontWeight: '700',
              }}>
              Shipping Address
            </Text>
            <Text
              style={{
                lineHeight: 22,
                fontSize: 14,
                color: 'black',
                textAlign: 'right',
              }}>
              G-18 Noida sector - 63 Near Fortis Hospital Noida, Uttar Pradesh
              2013021
            </Text>
          </View>
        </View>
        <Divider width={'100%'} />
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            marginVertical: 10,
            fontWeight: '700',
          }}>
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
            <Text style={{fontSize: 18, color: 'black', fontWeight: '700'}}>
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
            <Text style={{fontSize: 18, color: 'black', fontWeight: '700'}}>
              x1
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text style={{}}>Discount</Text>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '700'}}>
              ₹0.0
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text style={{}}>Delivery Charges</Text>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '700'}}>
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
            <Text style={{fontWeight: '700', fontSize: 18, color: '#000'}}>
              Total Amount
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: COLORS.PrimaryColor,
                fontWeight: '600',
              }}>
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
            <Text style={[styles.text, {color: 'white', fontWeight: '700'}]}>
              Cancel Order
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.right, {backgroundColor: '#7e72ff'}]}
          onPress={() => navigation.navigate('OrderTracking')}>
          <View>
            <Text style={[styles.text, {color: 'white', fontWeight: '700'}]}>
              Track Order
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    height: '100%',
    paddingHorizontal: 20,
  },
  image: {
    height: 91,
    width: 91,
    marginRight: 20,
    resizeMode: 'contain',
    borderRadius: 20,
    borderColor: '#eee',
    borderWidth: 1,
    padding: 5,
  },
  footer: {
    position: 'absolute',
    height: 65,
    width: '100%',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: '4%',
  },
  right: {
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 6,
    height: 40,
    flex: 1,
    width: 180,
  },
  text: {
    fontSize: 18,
  },
  feedback: {
    color: COLORS.PrimaryColor,
    fontWeight: '700',
    fontSize: 15,
  },
});
