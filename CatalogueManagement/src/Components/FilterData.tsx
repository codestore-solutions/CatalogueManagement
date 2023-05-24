import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import { FILTER } from './Filters';

type propType = {
  name: string;
  type: number;
  index:number
  toggle: (arg: string) => void;
  selected:boolean
};
const FilterData = (props: propType) => {
  
  const [style, setStyle] = useState(styles.unselectMark);

  useEffect(() => {
    if(props.selected){
      setStyle(styles.selectMark)
    }
    else{
      setStyle(styles.unselectMark)
    }
  }, [props]);

  return (
    <TouchableOpacity
      onPress={() => {
        props.toggle(props.name);
      }}>
      <View style={styles.box}>
        <Text style={style}>✔</Text>
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FilterData;

const styles = StyleSheet.create({
  box: {
    height: 70,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '65%',
    marginHorizontal: 20,
  },
  selectMark: {
    color: '#f75f66',
  },
  unselectMark: {
    color: '#d6d6d6',
  },
  text: {
    fontSize: 20,
  },
});
