import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Svg, {Path} from 'react-native-svg';
import Divider from '../../Components/Divider';
import CheckPoint from '../Components/Timeline/CheckPoint';
import Timeline from '../Components/Timeline/Timeline';
import OrderServices from '../Services/OrderServices';
import ImageComp from '../../Components/ImageComp';
import {theme} from '../../Constants/theme';
import {COLORS} from '../../Constants/colors';
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
      let timelineData = res.data.data;
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
          // setitems(items);
          // setitems({title: 'Orderd', complete: true});
        }
      }
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        minHeight: '100%',
        backgroundColor: COLORS.Light,
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 20,
          paddingHorizontal: '4%',
        }}>
        <ImageComp
          resizeMode="contain"
          imageStyle={styles.image}
          url={data.Attachment[0]}
        />
        <View style={{flexShrink: 1}}>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: 'black',
              marginBottom: 10,
              flexShrink: 1,
            }}>
            {data.Name}
          </Text>
          <Text>Qty: 1</Text>
        </View>
      </View>

      <View style={styles.timeline}>
        <Timeline items={items} />
      </View>
      <View style={styles.card}>
        <Text style={{color: 'black', fontSize: 18, fontWeight: '700'}}>
          Your Package is on the way
        </Text>
        <Text
          style={{
            marginBottom: 10,
            fontWeight: '700',
            color: COLORS.TextLight,
            marginVertical: 5,
          }}>
          Arriving on Monday
        </Text>
        <Divider width={'100%'} />
        <View
          style={{
            marginVertical: 20,
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
          }}>
          <ImageComp
            resizeMode="contain"
            url={'https://i.pravatar.cc/50'}
            imageStyle={{height: 50, width: 50, borderRadius: 30}}
          />
          <View style={{flex: 1, height: '100%'}}>
            <Text style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
              Harry Johnson
            </Text>
            <View style={{flexDirection: 'row', gap: 5, marginTop: 5}}>
              <Text>4.9</Text>
            </View>
          </View>
        </View>
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
  image: {
    height: 91,
    width: 91,
    marginRight: 20,
    resizeMode: 'contain',
    borderRadius: 20,
    borderColor: '#eee',
    borderWidth: 1,
    padding: 5,
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
    borderColor: COLORS.BorderColor,
    borderWidth: 1,
    borderBottomWidth: 0,
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
