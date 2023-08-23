import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Svg, {Path} from 'react-native-svg';
import Divider from '../../Components/Divider';
import CheckPoint from '../Components/Timeline/CheckPoint';
import Timeline from '../Components/Timeline/Timeline';
import OrderServices from '../Services/OrderServices';

const OrderTracking = (props: any) => {
  const data = {
    category: 'Electronics',
    subCategory: 'Mobile',
    Name: 'Google Pixel 6a (Charcoal, 128 GB) (6 GB RAM)',
    Varients: [
      {
        description:
          'Experience intuitiveness and enjoy seamless operation with smooth transition with the 5G-ready Google Pixel 6a that comes bundled with a myriad of innovative features.',
        price: '₹27,999',
        available: true,
        rating: 4.5,
      },
    ],
    Attachment: [
      'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70',
      'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/r/9/t/-original-imaggbrb3gyagad8.jpeg?q=70',
      'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/y/b/t/-original-imaggbrbkxzra38y.jpeg?q=70',
      'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/r/s/c/-original-imaggbrb42866wgx.jpeg?q=70',
      'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/p/l/m/-original-imaggbrbkzgzffez.jpeg?q=70',
    ],
  };

  const [items, setitems] = useState<{title: string; complete: boolean}[]>([]);
  const [timelineData, settimelineData] = useState<
    {orderStatusId: number; timestamp: string}[]
  >([]);

  async function getData() {
    await OrderServices.GetOrderTimeline(54).then(res => {
      settimelineData(res.data.data);
    });
    for (let i = 0; i < timelineData.length; i++) {
      if (
        timelineData[i].orderStatusId == 1 ||
        timelineData[i].orderStatusId == 4 ||
        timelineData[i].orderStatusId == 5 ||
        timelineData[i].orderStatusId == 7 ||
        timelineData[i].orderStatusId == 8 ||
        timelineData[i].orderStatusId == 10
      ) {
        items.push({
          title: order_status[timelineData[i].orderStatusId - 1].name,
          complete: true,
        });
        setitems(items);
      }
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{flexDirection: 'row', marginVertical: 20}}>
        <Image
          source={{uri: data.Attachment[0]}}
          style={{height: 100, width: 100}}
        />
        <View style={{width: '65%'}}>
          <Text
            numberOfLines={2}
            style={{fontSize: 18, color: 'black', marginBottom: 10}}>
            {data.Name}
          </Text>
          <Text>Qty: 1</Text>
        </View>
      </View>
      <View style={styles.timeline}>
        <Timeline items={items} />
      </View>
      <View style={styles.card}>
        <Text style={{color: 'black', fontSize: 18}}>
          Your Package is on the way
        </Text>
        <Text style={{marginBottom: 10}}>Arriving Monday</Text>
        <Divider width={'100%'} />
      </View>
    </ScrollView>
  );
};

export default OrderTracking;

const styles = StyleSheet.create({
  check: {
    marginRight: 20,
    marginLeft: 50,
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    height: 70,
    width: 10,
    marginLeft: 60,
    backgroundColor: '#7E72FF',
  },
  unselect: {
    height: 70,
    width: 10,
    marginLeft: 60,
    backgroundColor: '#DADADA',
  },
  card: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'white',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowRadius: 2,
    elevation: 5,
  },
  timeline: {
    width: '100%',
    paddingLeft: 50,
  },
});

export const order_status = [
  {name: 'Ordered'},

  {name: 'Canceled'},

  {name: 'Packing'},

  {name: 'Packing completed'},

  {name: 'Agent assigned'},

  {name: 'Agent re-assigning'},

  {name: 'Picked up'},

  {name: 'Reached destination'},

  {name: 'Not accepted by customer'},

  {name: 'Delivered'},

  {name: 'Return'},

  {name: 'Exchanged'},

  {name: 'Payment failed'},

  {name: 'Cancelled by seller'},

  {name: 'Cancelled by customer'},
];
