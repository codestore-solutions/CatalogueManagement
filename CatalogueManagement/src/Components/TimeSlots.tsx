import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Divider from './Divider';

type propType = {selected: boolean,onSelect: (arg0: string) => void};
const TimeSlots = (props: propType) => {
  const data = ['08:00 AM - 10:00 AM','10:00 AM - 12:00 PM','12:00 PM - 02:00 PM','02:00 PM - 04:00 PM','04:00 PM - 06:00 PM','06:00 PM - 08:00 PM','08:00 PM - 10:00 PM'];
  if (props.selected) {
    return (
      <View style={styles.body}>
        <FlatList data={data} renderItem={({item}) => 
        <TouchableOpacity
        onPress={()=>{props.onSelect(item)}}
        >
        <Text style={styles.text}>{item}</Text>
        <Divider width={'94%'} color='black'/>
        </TouchableOpacity>} />
      </View>
    );
  } else {
    return <View></View>;
  }
};

export default TimeSlots;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F1F3F6',
    alignSelf: 'center',
    marginHorizontal: 10,
    width: '94%',
    height:150
  },
  text:{
    fontSize:20,
    textAlign:'center',
    color:'black'
  }
});
