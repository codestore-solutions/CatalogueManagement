import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Divider from '../../Components/Divider';
import API from '../../Services/API_Services';
import Svg, {Path} from 'react-native-svg';
import OrderServices from '../Services/OrderServices';
import {order_status} from './OrderTracking';

const Orders = (props: any) => {
  let data = API.getProductDetails('');

  const [list, setlist] = useState<
    {createdAt: string; id: number; orderStatus: number}[]
  >([]);

  async function fetchOrders() {
    let res = await OrderServices.GetOrders(1, 20);
    setlist(res.data.data.list);
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <View style={styles.body}>
      <FlatList
        data={list}
        renderItem={({item, index}) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('OrderDetails', list[index].id);
              }}
              style={{flexDirection: 'row', marginTop: 20}}>
              <Image
                source={{uri: data.Attachment[0]}}
                style={{height: 100, width: 100}}
              />
              <View style={{width: '65%'}}>
                <Text
                  numberOfLines={2}
                  style={{fontSize: 18, color: 'black', marginBottom: 10}}>
                  Ordered On {list[index].createdAt.split('T')[0]}
                </Text>
                <Text style={{color: '#7E72FF'}}>
                  {order_status[list[index].orderStatus].name}
                </Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Svg
                  width={10}
                  height={16}
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  {...props}>
                  <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 0l8 8-8 8-2-2 6-6-6-6 2-2z"
                    fill="#000"
                  />
                </Svg>
              </View>
            </TouchableOpacity>
            <Divider width={'93%'} />
          </View>
        )}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    height: '100%',
  },
});
