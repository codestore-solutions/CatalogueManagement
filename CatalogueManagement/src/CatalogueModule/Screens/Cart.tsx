import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CartItem from '../../Components/CartItem';
import Divider from '../../Components/Divider';
import BankOffers from '../../OrderProcessing/Components/BankOffers';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import ProductServices from '../Services/ProductsServices';
import AddressCard from '../../Components/ReusableComponent/AddressCard';
import PriceDetails from '../../Components/ReusableComponent/PriceDetails';
import {StatusBar} from 'native-base';
import OrderingService from '../../services/OrderingService';
import CatalogueServices from '../../services/CatalogueServices';

const Cart = () => {
  const navigate: any = useNavigation();
  const route: any = useRoute();
  const [cartItems, setCartItems] = useState([]);
  const [cartItemDetails, setCartItemDetails] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCart = async () => {
    setCartItems([]);
    setCartItemDetails([]);
    setIsLoading(true);
    console.log('hii');
    await OrderingService.getCart(5)
      .then(res => {
        setCartItems(res.data.data);
        console.log(res.data.data);
        res.data.data.map((item: any) => {
          CatalogueServices.getProductDetail(item.productId)
            .then(res => {
              const cartItem = res.data;
              cartItem.variantId = item.variantId;
              cartItem.quantity = item.quantity;
              setCartItemDetails((pre: any) => [...pre, cartItem]);
              //console.log(res.data);
              setIsLoading(false);
            })
            .catch(console.log);
        });
        //{"id": 38, "productId": 2, "quantity": 0, "userId": 5, "variantId": 0}
      })
      .catch(console.log);
  };

  useEffect(() => {
    getCart();
  }, []);

  // useFocusEffect(() => {
  //   console.log('hi');
  // });

  if (isLoading)
    return (
      <View style={styles.body}>
        <ActivityIndicator style={{margin: 40}} size={30} />
      </View>
    );

  return (
    <>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ScrollView contentContainerStyle={styles.body}>
        <Divider width={'100%'} />
        <AddressCard />
        <Divider width={'100%'} />
        <BankOffers />
        <Divider width={'100%'} />
        <View>
          {cartItemDetails.map((item: any) => {
            return (
              <React.Fragment key={item.name + item.variantId}>
                <CartItem
                  variantId={item.variantId}
                  data={item}
                  index={1}
                  setQty={() => {}}
                  qty={item.quantity}
                />
                <Divider width={'100%'} />
              </React.Fragment>
            );
          })}

          {/* <PriceDetails variantData={variantData} quantity={quantity} /> */}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.footer}
        onPress={() => {
          navigate.navigate('DeliveryTimeSelection', {});
        }}>
        <Text style={{fontSize: 16, fontWeight: '700', color: 'white'}}>
          Place Order
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
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
    position: 'absolute',
    zIndex: 4,
    bottom: 75,
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: 'white',
    paddingHorizontal: '4%',
    paddingVertical: 10,
    minHeight: '100%',
    paddingBottom: 150,
  },
  bottom: {
    height: '40%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 15,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
