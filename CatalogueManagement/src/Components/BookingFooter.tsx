import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import DeliveryCard from './DeliveryCard';
import DatePicker from 'react-native-date-picker';
import Recommended from './Recommmended';

const BookingFooter = () => {
  const [visible, setvisible] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <View>
      <TouchableOpacity
        style={styles.body}
        onPress={() => {
          setvisible(true);
        }}>
        <View>
          <Text style={styles.text}>Book Now</Text>
        </View>
      </TouchableOpacity>
      <Modal visible={visible}>
        <View style={styles.Modal}>
          <View></View>
          <DeliveryCard />
          <View
            style={{
              margin: 20,
              alignSelf: 'center',
              borderWidth: 1,
              borderRadius: 15,
            }}>
            <Text style={{fontSize: 22, textAlign: 'center'}}>
              Select Date and Time
            </Text>
            <DatePicker
              style={{width: 400}}
              date={date}
              onDateChange={setDate}
              androidVariant="nativeAndroid"
              minuteInterval={30}
            />
          </View>
          <Recommended />
          <TouchableOpacity
            style={styles.body}
            onPress={() => {
              setvisible(false);
              console.log(date);
            }}>
            <View>
              <Text style={styles.text}>Confirm</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default BookingFooter;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
    width: '80%',
    borderRadius: 25,
  },
  text: {
    fontSize: 22,
    color: 'white',
    margin: 10,
    textAlign: 'center',
  },
  ModalHeader: {
    height: 50,
  },
  Modal: {
    height: '100%',
  },
});
