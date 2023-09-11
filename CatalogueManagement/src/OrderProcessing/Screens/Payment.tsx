import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Svg, {Circle, ClipPath, Defs, G, Path, Rect} from 'react-native-svg';
import Divider from '../../Components/Divider';
import RadioButton from '../Components/RadioButton';
import Input from '../Components/Input';
import BankOffers from '../Components/BankOffers';
import OrderServices from '../Services/OrderServices';
import {useNavigation, useRoute} from '@react-navigation/native';
import AddressCard from '../../Components/ReusableComponent/AddressCard';
import PriceDetails from '../../Components/ReusableComponent/PriceDetails';
import {COLORS} from '../../Constants/colors';

const Payment = () => {
  const route: any = useRoute();
  const navigation: any = useNavigation();
  const [bottomSheet, setbottomSheet] = useState(false);
  console.log(route);
  let total = 0;

  const handleSubmit = () => {
    //for buy now (1 item only)
    let orderForVendors = [
      {
        vendorId: 1,
        deliveryCharges: 99,
        orderItems: [
          {
            productId: route.params.productId,
            varientId: route.params.VariantId,
            price: route.params.price,
            discount: route.params.discount,
            quantity: route.params.quantity,
            orderStatus: route.params.orderStatus,
          },
        ],
      },
    ];
    let payload = {
      userId: 5, // to take from redux store
      ordersForVendors: orderForVendors,
      paymentId: 1, // to do
      shippingAddressId: 1, //to do
      tipAmount: 0, //to do
      deliveryDate: route.params.deliveryDate,
      deliverySlotId: route.params.deliverySlotId,
      paymentMode: 1, // to do
      paymentStatus: 0, // to do
    };

    navigation.navigate('Gateway', payload);
    // createOrder();
    console.log('==>', payload);
  };

  const [radio, setradio] = useState([false, true, false]);

  const [tip, settip] = useState(0);

  function getTotal() {
    console.log(route.params);

    // route?.params?.forEach((i: {price: number}) => { // to fix
    //   total += i.price;
    // });
  }

  async function createOrder() {
    // to fix
    // await OrderServices.CreateOrder([
    //   {vendorId: 1, deliveryCharges: 99, orderItems: route.params},
    // ]);
  }

  getTotal();
  return (
    <View>
      <ScrollView style={styles.body}>
        <Divider width={'100%'} />

        <AddressCard />

        <Divider width={'100%'} />
        <BankOffers />
        <Divider width={'100%'} />
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            marginVertical: 10,
            fontWeight: '700',
          }}>
          Recommended Payment Option
        </Text>
        <View style={styles.darkbox}>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => {
              setradio([true, false, false]);
            }}>
            <RadioButton selected={radio[0]} title="Cash on delivery" />
          </TouchableOpacity>
          {/* <View style={{marginVertical: 20, flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <Circle cx={12} cy={12} r={9.5} fill="#fff" stroke="#7E72FF" />
                <Rect
                  x={1}
                  y={1}
                  width={22}
                  height={22}
                  rx={11}
                  stroke="#7E72FF"
                  strokeOpacity={0.4}
                  strokeWidth={2}
                />
                <Path
                  d="M12 17.833a5.833 5.833 0 100-11.666 5.833 5.833 0 000 11.666z"
                  fill="#7E72FF"
                />
              </Svg>
              <Text style={{marginLeft: 5, color: 'black'}}>
                Cash on delivery
              </Text>
            </View>
          </View> */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}
            onPress={() => {
              setradio([false, true, false]);
            }}>
            {/* <View style={{flexDirection: 'row'}}>
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <Circle cx={12} cy={12} r={9.5} fill="#fff" stroke="#7E72FF" />
                <Rect
                  x={1}
                  y={1}
                  width={22}
                  height={22}
                  rx={11}
                  stroke="#7E72FF"
                  strokeOpacity={0.4}
                  strokeWidth={2}
                />
                <Path
                  d="M12 17.833a5.833 5.833 0 100-11.666 5.833 5.833 0 000 11.666z"
                  fill="#7E72FF"
                />
              </Svg>
              <Text style={{marginLeft: 5, color: 'black'}}>Google Pay</Text>
            </View> */}
            <RadioButton selected={radio[1]} title="Google Pay" />
            <Svg
              width={38}
              height={16}
              viewBox="0 0 38 16"
              fill="none"
              //@ts-expect-error
              xmlns="http://www.w3.org/2000/svg">
              <G clipPath="url(#clip0_212_3619)">
                <Path
                  d="M26.936 4.318c1.045 0 1.852.301 2.47.903.617.603.901 1.406.901 2.41v4.816h-1.33v-1.103h-.047c-.57.903-1.377 1.354-2.326 1.354-.808 0-1.52-.25-2.09-.752a2.733 2.733 0 01-.855-1.957c0-.803.285-1.456.855-1.957.57-.502 1.377-.703 2.327-.703.855 0 1.52.15 2.042.502V7.48c0-.469-.166-.937-.497-1.242l-.073-.063a2.006 2.006 0 00-1.377-.552c-.807 0-1.425.351-1.852 1.054l-1.235-.803c.76-1.054 1.757-1.556 3.087-1.556zM20.24.906c.852 0 1.661.313 2.309.898l.112.105c.665.603.997 1.506.997 2.46 0 .953-.332 1.806-.997 2.458-.665.653-1.472 1.004-2.421 1.004l-2.28-.05v4.667h-1.424V.905h3.704zm6.885 7.627c-.57 0-1.045.15-1.425.452-.38.25-.57.602-.57 1.054 0 .401.19.752.475.953.333.251.713.402 1.092.402a2.16 2.16 0 001.48-.615l.087-.088c.475-.452.713-1.003.713-1.606-.428-.35-1.045-.552-1.852-.552zm-6.79-6.222H17.96v4.014h2.375c.522 0 1.044-.2 1.377-.602.76-.752.76-2.007.047-2.76l-.047-.05c-.38-.401-.855-.652-1.378-.602zM38 4.569L33.299 15.96h-1.425l1.757-3.964-3.086-7.377h1.52l2.231 5.67h.048l2.184-5.67H38v-.05z"
                  fill="#5F6368"
                />
                <Path
                  d="M12.31 6.777c0-.452-.047-.903-.095-1.355H6.28v2.56h3.371c-.142.802-.57 1.555-1.234 2.007v1.656h2.042c1.187-1.154 1.852-2.86 1.852-4.868z"
                  fill="#4285F4"
                />
                <Path
                  d="M6.28 13.25c1.71 0 3.134-.602 4.179-1.605L8.417 9.989c-.57.401-1.282.652-2.137.652-1.615 0-3.04-1.154-3.514-2.76H.676v1.706c1.093 2.258 3.23 3.663 5.604 3.663z"
                  fill="#34A853"
                />
                <Path
                  d="M2.766 7.881a3.938 3.938 0 010-2.56V3.617H.676c-.902 1.856-.902 4.064 0 5.971l2.09-1.706z"
                  fill="#FBBC04"
                />
                <Path
                  d="M6.28 2.612c.902 0 1.757.351 2.422 1.004l1.804-1.907C9.366.605 7.846-.047 6.327.003 3.953.003 1.77 1.408.724 3.666l2.09 1.706c.427-1.606 1.851-2.76 3.466-2.76z"
                  fill="#EA4335"
                />
              </G>
              <Defs>
                <ClipPath id="clip0_212_3619">
                  <Path fill="#fff" d="M0 0H38V16H0z" />
                </ClipPath>
              </Defs>
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setradio([false, false, true]);
            }}
            style={{
              flexDirection: 'row',
              marginBottom: 20,
              justifyContent: 'space-between',
            }}>
            {/* <View style={{flexDirection: 'row'}}>
              <Svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <Circle cx={10} cy={10} r={9.5} fill="#fff" stroke="#7E72FF" />
              </Svg>
              <Text style={{marginLeft: 5, color: 'black'}}>Phone Pay</Text>
            </View> */}
            <RadioButton selected={radio[2]} title="Phone Pay" />
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              //@ts-expect-error
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M10.206 9.94h2.949v4.693c-.402.2-.938.268-1.34.268-1.072 0-1.61-.536-1.61-1.743V9.94zm13.47 4.817c-1.523 6.449-7.985 10.442-14.433 8.919C2.793 22.154-1.2 15.69.323 9.243 1.848 2.793 8.31-1.2 14.758.323c6.449 1.524 10.442 7.986 8.919 14.434zm-6.231-5.888a.887.887 0 00-.871-.871h-1.61L11.28 3.776c-.335-.402-.871-.536-1.407-.402l-1.274.4c-.201.068-.268.336-.134.47l4.02 3.82H6.387c-.201 0-.335.134-.335.335v.67c0 .469.402.87.87.87h.939v3.218c0 2.413 1.273 3.82 3.418 3.82.67 0 1.206-.067 1.877-.335v2.145c0 .603.469 1.072 1.072 1.072h.938a.432.432 0 00.402-.402V9.874h1.542c.2 0 .335-.134.335-.335v-.67z"
                fill="#82E"
              />
            </Svg>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            marginVertical: 10,
            fontWeight: '700',
          }}>
          Other Payment Option
        </Text>
        <View style={styles.darkbox}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Svg
                width={30}
                height={18}
                viewBox="0 0 30 18"
                fill="none"
                //@ts-expect-error
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M19.688 9a4.687 4.687 0 10-9.375 0 4.687 4.687 0 009.374 0zm9.375 7.5v-15a.938.938 0 00-.938-.938H1.875a.937.937 0 00-.938.938v15a.937.937 0 00.938.938h26.25a.938.938 0 00.938-.938zm-1.875-5.432a6.653 6.653 0 00-4.495 4.495H7.307a6.654 6.654 0 00-4.495-4.495V6.932a6.654 6.654 0 004.495-4.495h15.386a6.653 6.653 0 004.494 4.495v4.136z"
                  fill="#333"
                />
              </Svg>
              <Text style={{marginLeft: 5, color: 'black'}}>
                Credit/Debit Card
              </Text>
            </View>
            <Svg
              width={14}
              height={8}
              viewBox="0 0 14 8"
              fill="none"
              //@ts-expect-error
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M13 1L7 7 1 1"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Svg
                width={30}
                height={18}
                viewBox="0 0 30 18"
                fill="none"
                //@ts-expect-error
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M19.688 9a4.687 4.687 0 10-9.375 0 4.687 4.687 0 009.374 0zm9.375 7.5v-15a.938.938 0 00-.938-.938H1.875a.937.937 0 00-.938.938v15a.937.937 0 00.938.938h26.25a.938.938 0 00.938-.938zm-1.875-5.432a6.653 6.653 0 00-4.495 4.495H7.307a6.654 6.654 0 00-4.495-4.495V6.932a6.654 6.654 0 004.495-4.495h15.386a6.653 6.653 0 004.494 4.495v4.136z"
                  fill="#333"
                />
              </Svg>
              <Text style={{marginLeft: 5, color: 'black'}}>Wallets</Text>
            </View>
            <Svg
              width={14}
              height={8}
              viewBox="0 0 14 8"
              fill="none"
              //@ts-expect-error
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M13 1L7 7 1 1"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Svg
                width={30}
                height={18}
                viewBox="0 0 30 18"
                fill="none"
                //@ts-expect-error
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M19.688 9a4.687 4.687 0 10-9.375 0 4.687 4.687 0 009.374 0zm9.375 7.5v-15a.938.938 0 00-.938-.938H1.875a.937.937 0 00-.938.938v15a.937.937 0 00.938.938h26.25a.938.938 0 00.938-.938zm-1.875-5.432a6.653 6.653 0 00-4.495 4.495H7.307a6.654 6.654 0 00-4.495-4.495V6.932a6.654 6.654 0 004.495-4.495h15.386a6.653 6.653 0 004.494 4.495v4.136z"
                  fill="#333"
                />
              </Svg>
              <Text style={{marginLeft: 5, color: 'black'}}>EMI</Text>
            </View>
            <Svg
              width={14}
              height={8}
              viewBox="0 0 14 8"
              fill="none"
              //@ts-expect-error
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M13 1L7 7 1 1"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Svg
                width={30}
                height={18}
                viewBox="0 0 30 18"
                fill="none"
                //@ts-expect-error
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M19.688 9a4.687 4.687 0 10-9.375 0 4.687 4.687 0 009.374 0zm9.375 7.5v-15a.938.938 0 00-.938-.938H1.875a.937.937 0 00-.938.938v15a.937.937 0 00.938.938h26.25a.938.938 0 00.938-.938zm-1.875-5.432a6.653 6.653 0 00-4.495 4.495H7.307a6.654 6.654 0 00-4.495-4.495V6.932a6.654 6.654 0 004.495-4.495h15.386a6.653 6.653 0 004.494 4.495v4.136z"
                  fill="#333"
                />
              </Svg>
              <Text style={{marginLeft: 5, color: 'black'}}>Net Banking</Text>
            </View>
            <Svg
              width={14}
              height={8}
              viewBox="0 0 14 8"
              fill="none"
              //@ts-expect-error
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M13 1L7 7 1 1"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
        </View>
        <Divider width={'100%'} marginVertical={15} color="#EAEAEA" />
        <Input placeholder="Add a tip for your delivery partner(Optional)" />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={styles.tip}
            onPress={() => {
              settip(10);
            }}>
            <Text style={styles.tipText}>₹10</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tip}
            onPress={() => {
              settip(20);
            }}>
            <Text style={styles.tipText}>₹20</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tip}
            onPress={() => {
              settip(50);
            }}>
            <Text style={styles.tipText}>₹50</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tip}
            onPress={() => {
              settip(100);
            }}>
            <Text style={styles.tipText}>₹100</Text>
          </TouchableOpacity>
        </View>
        <PriceDetails variantData={route.params} quantity={1} />
        <View style={{height: 150}}></View>
      </ScrollView>

      <View style={styles.footer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: '100%',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              color: 'black',
              marginLeft: 25,
              flex: 1,
            }}>
            ₹{parseInt(route.params?.price) * 1 + 49 + 99}
          </Text>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => {
              handleSubmit();
            }}>
            <View style={styles.right}>
              <Text style={styles.text}>Pay Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  bottom: {
    height: '80%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 10,
  },
  addressBox: {
    margin: 20,
    height: 110,
    width: '96%',
    borderWidth: 1,
    alignSelf: 'center',
    elevation: 5,
    backgroundColor: 'white',
    padding: 10,
  },
  tip: {
    backgroundColor: COLORS.BorderColor,
    padding: 10,
    margin: 10,
    flex: 1,
    borderRadius: 5,
  },
  right: {
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#7E72FF',
    paddingVertical: 10,
    marginRight: 25,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  body: {
    backgroundColor: 'white',
    paddingHorizontal: '4%',
    height: '100%',
  },
  darkbox: {
    backgroundColor: '#F9F9F9',
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  footer: {
    borderColor: COLORS.Grey,
    borderTopWidth: 1,
    height: '8%',
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    bottom: 0,
  },
  foot: {
    width: '96%',
    height: 50,
    backgroundColor: '#7E72FF',
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tipText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
  },
});
