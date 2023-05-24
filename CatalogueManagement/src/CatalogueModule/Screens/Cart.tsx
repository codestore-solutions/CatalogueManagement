import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import CartItem from '../../Components/CartItem';
import UserServices from '../Services/User_Services';

const Cart = (props: {
  navigation: {navigate: (arg0: string, arg1: {root: string}) => void};
}) => {

  const [data, setdata] = useState((UserServices.getCart()));
  const [state, setstate] = useState(true)

  function setQuantity(id:string,increment:boolean,quantity:number){
    if(increment){UserServices.setCart(id,(quantity+1))}
    else{UserServices.setCart(id,quantity-1)}
    setdata(UserServices.getCart());
    setstate(!state);
  }
  function remove(id:string){
    UserServices.reove(id);
    setdata(UserServices.getCart());
    setstate(!state);
  }
  return (
    <View>
      
      <View style={styles.list}>
        <FlatList
        extraData={state}
          data={Object.keys(data)}
          renderItem={({item, index}) => (
            <CartItem id={item}
            quantity={UserServices.getQuant(item)}
            setQuantity={setQuantity}
            remove={remove}
            />
          )}
        />
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
});
