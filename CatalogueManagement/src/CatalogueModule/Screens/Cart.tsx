import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CartItem from '../../Components/CartItem';
import Divider from '../../Components/Divider';
import BankOffers from '../../OrderProcessing/Components/BankOffers';
import {useNavigation, useRoute} from '@react-navigation/native';
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
  const [isLoading, setIsLoading] = useState(!true);

  useEffect(() => {
    OrderingService.getCart(5)
      .then(res => {
        setCartItems(res.data.data);
        res.data.data.map((item: any) => {
          CatalogueServices.getProductDetail(2)
            .then(res => {
              console.log(res.data.id);
            })
            .catch(console.log);
        });
        //{"id": 38, "productId": 2, "quantity": 0, "userId": 5, "variantId": 0}
      })
      .catch(console.log);
    // ProductServices.getProduct(route.params.productId)
    //   .then(res => {
    //     setData(res?.data);
    //     setIsLoading(false);
    //     const filteredData = res?.data.varients.filter(
    //       (item: any) => item.id == route.params.variantId,
    //     );
    //     setVariantData(filteredData[0]);
    //   })
    //   .catch(console.log);
  }, []);

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
        {/* <View>
          <CartIteme
            variantId={route.params.variantId}
            data={data}
            index={1}
            setQty={setQuantity}
            qty={quantity}
          />
          <Divider width={'100%'} />

          <PriceDetails variantData={variantData} quantity={quantity} />
        </View> */}
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
