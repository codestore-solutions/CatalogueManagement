import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import UserServices from '../CatalogueModule/Services/UserServices';
import Svg, {Path} from 'react-native-svg';
import TimeSlots from './TimeSlots';

const FooterButtons = (props: {
  navigation: {navigate: (arg0: string, {}) => void};
  id: string | number;
  vid: string | number;
  qty: number;
  price: number;
  vendorId: number;
}) => {
  const [visible, setvisible] = useState(false);

  const [timeBarVisible, settimeBarVisible] = useState(false);

  const [selectedTime, setselectedTime] = useState(
    'Select preffered delivery time',
  );

  return (
    <View>
      <View style={styles.body}>
        <TouchableOpacity
          onPress={async () => {
            await UserServices.addToCart(props.id, props.vid, props.qty);
            props.navigation.navigate('Cart', {qty: props.qty, id: props.id});
          }}>
          <View style={styles.left}>
            <Text style={styles.text}>Add To Cart</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.right}
          onPress={() => {
            // setvisible(!visible);
            // props.navigation.navigate('Payment', {
            // productId: props.id,
            // varientId: props.vid,
            // price: props.price,
            // discount: 0,
            // quantity: props.qty,
            // orderStatus: 0,
            // });
            props.navigation.navigate('BuyNow', {
              productId: props.id,
              variantId: props.vid,
              price: props.price,
              discount: 0,
              quantity: props.qty,
              orderStatus: 0,
            });
          }}>
          <View>
            <Text style={[styles.text, {color: 'white'}]}>Buy Now</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal transparent={true} visible={visible}>
        <View style={styles.modal}>
          <TouchableOpacity
            onPress={() => {
              setvisible(false);
            }}></TouchableOpacity>
          <View style={styles.bottom}>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                fontWeight: '400',
                padding: 20,
              }}>
              Select Address
            </Text>
            <View style={styles.addressBox}>
              <Text>User Address</Text>
              <Text>
                G-18 Noida sector - 63 Near Fortis Hospital Noida, Uttar Pradesh
                2013021
              </Text>
            </View>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                fontWeight: '400',
                paddingHorizontal: 10,
              }}>
              Select Preffered Delivery Time
            </Text>
            <TouchableOpacity
              style={styles.box}
              onPress={() => settimeBarVisible(!timeBarVisible)}>
              <Text style={{fontSize: 16}}>{selectedTime}</Text>
              <Svg
                width={14}
                height={8}
                viewBox="0 0 14 8"
                fill="none"
                //@ts-expect-error
                xmlns="http://www.w3.org/2000/svg"
                {...props}>
                <Path
                  d="M13 1L7 7 1 1"
                  stroke="#000"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </TouchableOpacity>
            <TimeSlots selected={timeBarVisible} onSelect={setselectedTime} />
            <TouchableOpacity
              style={styles.footer}
              onPress={() => {
                props.navigation.navigate('Payment', [
                  {
                    productId: props.id,
                    varientId: props.vid,
                    price: props.price,
                    discount: 0,
                    quantity: props.qty,
                    orderStatus: 0,
                  },
                ]);
              }}>
              <Text style={{color: 'white'}}>Place Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FooterButtons;
const styles = StyleSheet.create({
  body: {
    position: 'absolute',
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  left: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  right: {
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#7E72FF',
    paddingVertical: 6,
  },
  text: {
    fontSize: 18,
  },
  bottom: {
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 50,
    bottom: 0,
    position: 'absolute',
  },
  modal: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
  footer: {
    width: '96%',
    height: 50,
    backgroundColor: '#7E72FF',
    // position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  box: {
    width: '95%',
    backgroundColor: '#F1F3F6',
    height: 53,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
