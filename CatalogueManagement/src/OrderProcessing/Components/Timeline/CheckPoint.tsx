import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type propType = {title: string; completed: boolean; index:number};

const CheckPoint = (props: propType) => {
  
  const bg = props.completed ? '#7E72FF' : '#DADADA'
  return (
    <View>
    <View style={[styles.bar,{backgroundColor:bg,height: props.index == 0? 0:70}]}/>
      <View style={styles.stage}>
      <View
        style={[
          styles.point,
          {backgroundColor: bg},
        ]}></View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
    </View>
  );
};

export default CheckPoint;

const styles = StyleSheet.create({
  stage: {
    flexDirection: 'row',
    alignItems:'center'
  },
  point: {
    height: 30,
    width: 30,
    borderRadius: 30,
    margin:0,
    padding:0,
  },
  title: {
    color: 'black', 
    fontSize: 18,
    fontWeight:'500',
    marginLeft:20
},
bar:{
 width:10,
 marginLeft:10
}
});
