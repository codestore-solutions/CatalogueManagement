import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import API from '../../Services/API_Services';
import Svg, {Path} from 'react-native-svg';
import Divider from '../../Components/Divider';
import CheckPoint from '../Components/Timeline/CheckPoint';
import Timeline from '../Components/Timeline/Timeline';
import OrderServices from '../Services/OrderServices';

const OrderTracking = (props: any) => {
  let data = API.getProductDetails('');



  const [items, setitems] = useState<{title:string,complete:boolean}[]>([])
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
          title:order_status[timelineData[i].orderStatusId-1].name,
          complete:true
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
