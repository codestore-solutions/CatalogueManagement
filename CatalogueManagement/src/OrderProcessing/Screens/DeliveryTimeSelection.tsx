import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {theme} from 'native-base';
import Divider from '../../Components/Divider';
import {COLORS} from '../../Constants/colors';
import {DeliverySlotsEnum} from '../../Enums/DeliverySlotsEnum';
import {DeliverySlotMapper} from '../../Enums/EnumMapper';
import {useState} from 'react';
import moment from 'moment';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import OrderingService from '../../services/OrderingService';

const DeliveryTimeSelection = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(10);
  const [selectedDate, setSelectedDate] = useState('');
  const [slotsData, setSlotsData] = useState([]);
  const route = useRoute();
  const navigation: any = useNavigation();
  const [slotsLoading, setSlotsLoading] = useState(true);

  useEffect(() => {
    OrderingService.getTimeSlots(undefined)
      .then(res => {
        setSlotsData(res.data.data);
        setSlotsLoading(false);
      })
      .catch(console.log);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <Divider width={'100%'} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 15,
          paddingHorizontal: '4%',
        }}>
        <Text style={{fontSize: 16}}>
          Delivery to :{' '}
          <Text style={{color: '#000', fontWeight: '700'}}>
            G-18, Noida Sec- 63
          </Text>
        </Text>
        <Text
          onPress={() => {
            // setbottomSheet(true);
          }}
          style={{fontWeight: '600', color: COLORS.PrimaryColor}}>
          Change
        </Text>
      </View>
      <Divider width={'100%'} />
      <ScrollView>
        {/* Date Selection */}
        {false ? (
          <>
            <View
              style={{
                marginVertical: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: '4%',
              }}>
              <Text style={{fontSize: 20, fontWeight: '600', color: '#000'}}>
                Select Date
              </Text>
              <View>
                <Text>12/07/2023</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                marginBottom: 30,
                justifyContent: 'space-between',
                gap: 20,
                paddingHorizontal: '4%',
              }}>
              {[2, 3, 4, 5, 6].map((item, index) => {
                const isActive = item == 2;
                return (
                  <TouchableOpacity
                    // onPress={()=>{setMoment}}
                    key={index}
                    style={{
                      backgroundColor: isActive
                        ? COLORS.PrimaryColor
                        : COLORS.Grey,
                      paddingVertical: 10,
                      flex: 1,
                      borderRadius: 15,
                      borderColor: isActive ? '#fff' : COLORS.BorderColor,
                      borderWidth: isActive ? 3 : 1,
                      elevation: isActive ? 5 : undefined,
                    }}>
                    <Text
                      style={{
                        color: isActive ? '#fff' : COLORS.DarkGrey,
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: '700',
                      }}>
                      {moment().add(item, 'days').format('DD')}
                    </Text>
                    <Text
                      style={{
                        color: isActive ? '#fff' : COLORS.DarkGrey,
                        textAlign: 'center',
                        fontSize: 16,
                      }}>
                      {moment().add(item, 'days').format('dd')}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </>
        ) : (
          <View
            style={{
              paddingHorizontal: '4%',
              marginVertical: 20,
            }}>
            <Text numberOfLines={1} style={{fontSize: 18, color: '#000'}}>
              Estimated Delivery Data :{' '}
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: COLORS.DarkGrey,
                }}>
                {moment().add(2, 'days').format('DD/MM/YYYY')}
              </Text>
            </Text>
          </View>
        )}
        {/* Date Selection End*/}
        <Divider width={'100%'} />
        {/* Time Selection Start */}
        {slotsLoading ? (
          <ActivityIndicator size={30} style={{margin: 40}} />
        ) : (
          <>
            <View
              style={{
                marginVertical: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: '4%',
              }}>
              <Text style={{fontSize: 20, fontWeight: '600', color: '#000'}}>
                Select Time
              </Text>
              <View>
                <Text style={{color: '#000'}}>
                  {DeliverySlotMapper(selectedTimeSlot)}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                marginBottom: 30,
                gap: 12,
                flexWrap: 'wrap',
                paddingHorizontal: '4%',
              }}>
              {slotsData.map((item: any, index) => {
                const isActive = item.id == selectedTimeSlot;
                return (
                  <TouchableOpacity
                    onPress={() => setSelectedTimeSlot(item.id)}
                    key={index}
                    style={{
                      backgroundColor: isActive
                        ? COLORS.PrimaryColor
                        : COLORS.Grey,
                      padding: isActive ? 10 : 12,
                      borderRadius: 15,
                      borderColor: isActive ? '#fff' : COLORS.BorderColor,
                      borderWidth: isActive ? 3 : 1,
                      elevation: isActive ? 5 : 0,
                    }}>
                    <Text
                      style={{
                        color: isActive ? '#fff' : COLORS.DarkGrey,
                        textAlign: 'center',
                        fontSize: 18,
                      }}>
                      {item.slotName}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </>
        )}
      </ScrollView>
      <View style={{flex: 1}} />
      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: COLORS.PrimaryColor,
          width: '92%',
          borderRadius: 15,
          marginVertical: 20,
          marginHorizontal: '4%',
          opacity: slotsLoading ? 0.6 : 1,
        }}
        disabled={slotsLoading}
        onPress={() => {
          navigation.navigate('BuyNow', {...route.params});
        }}>
        <Text
          style={{
            color: COLORS.Light,
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 18,
          }}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeliveryTimeSelection;
