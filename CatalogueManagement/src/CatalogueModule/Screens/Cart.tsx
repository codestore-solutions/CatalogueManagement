import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  Modal,
  ScrollView,
  Alert
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CartItem from '../../Components/CartItem';
import UserServices from '../Services/UserServices';
import Divider from '../../Components/Divider';
import Svg, {Path} from 'react-native-svg';
import BankOffers from '../../OrderProcessing/Components/BankOffers';

const Cart = (
  props:
    | {
        navigation: {navigate: (arg0: string, arg1: {root: string}) => void};
        route:any
      }|any
) => {

  
  
  const [data, setdata] = useState
  <{
     cartId: number, id: number, productId: number, quantity: number, varientId: number
  }[]>([]);
  const [state, setstate] = useState(true);
  const [bottomSheet, setbottomSheet] = useState(false);

  async function remove(id:string|number) {
    await UserServices.remove(id);
    setstate(!state);
  }

  async function getData() {
    let res = await UserServices.getCart();
    setdata(res?.data.data.cartItems);
  }
 
  useEffect(() => {
    getData();
  }, [])

  const [list, setlist] = useState<{'id':number,'vid':number,'price':number,'qty':number}[]>([])
  
  return (
    <View style={styles.body}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 15,
        }}>
        <Text style={{fontSize: 16}}>Delivery to :{}</Text>
        <Text style={{color: 'blue'}} onPress={()=>{setbottomSheet(!bottomSheet)}}>Change</Text>
      </View>
      <Divider width={'100%'} />
      {/* <View
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
      </View> */}
      <BankOffers/>
      <Divider width={'100%'} />
      <View>
        <FlatList
          data={data}
          extraData={state}
          renderItem={({item}) => (
            <View>
              <CartItem
              id={item.productId}
              quantity={1}
              setQuantity={() => {}}
              remove={remove}
              list={list}
              setList={setlist}
            />
            <Divider
            width={'100%'}
            />
            </View>
          )}
        />
      </View>
      <TouchableOpacity style={styles.footer} onPress={() => {
        setbottomSheet(true)
      }}>
        <Text style={{color: 'white'}}>Place Order</Text>
      </TouchableOpacity>
      <Modal transparent visible={bottomSheet} animationType='slide'>
        <TouchableOpacity
        onPress={()=>{
          setbottomSheet(false)
        }}
          style={{
            height:'100%',
            backgroundColor:'rgba(0, 0, 0, 0.5)'
          }}>
          <View style={styles.bottom}>
            <Text style={{fontSize:18,color:'black',fontWeight:'400',padding:20}}>Change Address</Text>
            <View style={styles.addressBox}>
              <Text>User Address</Text>
              <Text>G-18 Noida sector - 63 Near Fortis Hospital
Noida, Uttar Pradesh 2013021</Text>
            </View>
          <TouchableOpacity style={styles.footer} onPress={() => {
            setbottomSheet(false)
            if(data.length != 0){
              props.navigation.navigate('Payment',[{'id':data[0].productId,'vid':data[0].varientId,'price':2000,'qty':1}])
            }
            else{
              Alert.alert('Can not Proceed','Cart is Empty')
            }
          }}>
        <Text style={{color: 'white'}}>Place Order</Text>
      </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  addressBox:{
    margin:20,
    height:110,
    width:'96%',
    borderWidth:1,
    alignSelf:'center',
    elevation:5,
    backgroundColor:'white',
    padding:10
  },
  footer: {
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
  body: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    height: '100%',
  },
  bottom: {
    height: '40%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 15,
    width: '100%',
    borderTopLeftRadius:15,
    borderTopRightRadius:15
  },
});
