import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import OrderingService from '../services/OrderingService';
import {COLORS} from '../Constants/colors';

const FooterButtons = (props: {
  navigation: {navigate: (arg0: string, {}) => void};
  id: string | number;
  vid: string | number;
  qty: number;
  price: number;
  vendorId: number;
}) => {
  const [isAddedToCard, setIsAddedToCard] = useState(false);
  const addToCart = async () => {
    if (isAddedToCard) {
      props.navigation.navigate('Cart', {});
      return;
    }
    const payload = {
      userId: 5,
      productId: props.id,
      variantId: props.vid,
      quantity: props.qty,
    };
    console.log(payload);
    await OrderingService.addToCart(payload)
      .then((res: any) => {
        console.log(res.data);
        setIsAddedToCard(true);
      })
      .catch(console.log);
  };

  return (
    <View>
      <View style={styles.body}>
        <TouchableOpacity onPress={addToCart}>
          <View style={styles.left}>
            <Text
              style={[
                isAddedToCard ? {color: COLORS.PrimaryColor} : {},
                styles.text,
              ]}>
              {isAddedToCard ? 'View Cart' : 'Add To Cart'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.right}
          onPress={() => {
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
