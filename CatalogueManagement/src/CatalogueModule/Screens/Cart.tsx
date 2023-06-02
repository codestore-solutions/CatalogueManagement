import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import CartItem from '../../Components/CartItem';
import UserServices from '../Services/UserServices';
import Divider from '../../Components/Divider';
import Svg, {Path} from 'react-native-svg';

const Cart = (
  props:
    | {
        navigation: {navigate: (arg0: string, arg1: {root: string}) => void};
      }
    | any,
) => {
  const [data, setdata] = useState(UserServices.getCart());
  const [state, setstate] = useState(true);

  function setQuantity(id: string, increment: boolean, quantity: number) {
    if (increment) {
      UserServices.setCart(id, quantity + 1);
    } else {
      UserServices.setCart(id, quantity - 1);
    }
    setdata(UserServices.getCart());
    setstate(!state);
  }
  function remove(id: string) {
    UserServices.reove(id);
    setdata(UserServices.getCart());
    setstate(!state);
  }
  return (
    <View style={styles.body}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 15,
        }}>
        <Text style={{fontSize: 16}}>Delivery to :{}</Text>
        <Text style={{color: 'blue'}}>Change</Text>
      </View>
      <Divider width={'100%'} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <Path
              d="M18.171 10l.145-.25 1.104-1.908L18.171 10zm0 0l.145.25m-.145-.25l.145.25m0 0l1.103 1.908h0a.502.502 0 01-.182.684h0l-1.91 1.104-.25.145v2.488a.5.5 0 01-.5.5h-2.488l-.144.249-1.103 1.91s0 0 0 0a.501.501 0 01-.683.182l-1.91-1.104-.25-.144-.25.144L7.84 19.42l10.475-9.17zm-1.238-4.34V3.423a.5.5 0 00-.5-.5H14.09l-.144-.25L12.844.764s0 0 0 0a.508.508 0 00-.5-.247.493.493 0 00-.183.062h0l-1.91 1.105-.251.145-.25-.145L7.84.579s0 0 0 0a.5.5 0 00-.683.183h0l-1.104 1.91-.145.25H3.42a.5.5 0 00-.5.5V5.91l-.249.144-1.91 1.104h0a.498.498 0 00-.183.683h0L1.684 9.75l.145.25-.145.25-1.104 1.907s0 0 0 0a.504.504 0 00.183.686l1.908 1.103.25.145v2.488a.5.5 0 00.5.5h2.488l.145.249 1.102 1.908h.001a.51.51 0 00.435.252.503.503 0 00.25-.068l9.237-13.51zm0 0l.25.145m-.25-.144l.25.144m0 0l1.91 1.104s0 0 0 0a.5.5 0 01.182.683l-2.092-1.787zM7.499 14.99l.4.3.3-.4 6-8 .3-.4-.4-.3-1.6-1.2-.4-.299-.3.4-6 8-.3.4.4.3 1.6 1.2zm1.414-9.914a2 2 0 10-2.83 2.829 2 2 0 002.83-2.829zm2.82 10.262a2.001 2.001 0 101.533-3.698 2.001 2.001 0 00-1.533 3.697z"
              fill="#000"
              stroke="#000"
            />
          </Svg>
          <Text style={{fontSize: 20, fontWeight: '500', marginLeft: 20}}>
            Available Offers
          </Text>
        </View>
        <Svg
          width={14}
          height={8}
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <Path
            d="M13 7L7 1 1 7"
            stroke="#000"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </View>
      <Divider width={'100%'} />
      <View style={styles.list}>
        <FlatList data={Array(1)} renderItem={() => 
        <CartItem 
        id=''
        quantity={1}
        setQuantity={()=>{}}
        remove={()=>{}}
        />
        } />
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={{fontSize: 18}}>Total</Text>
          <Text style={{fontSize: 18}}>₹{}/-</Text>
        </View>
        <Button
          onPress={() => {
            props.navigation.navigate('Buynow', {root: 'cart'});
          }}
          title="Check Out"
        />
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  list: {
    height: '91%',
  },
  footer: {
    height: '9%',
    backgroundColor: 'white',
    elevation: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  body: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
});
