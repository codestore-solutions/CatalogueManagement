import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

type propType = {
  name: string;
  index: number;
  action: (arg0: number) => void;
};
const FilterTag = (props: propType) => {
  return (
    <TouchableOpacity onPress={() => props.action(props.index)}>
      <View style={styles.box}>
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FilterTag;

const styles = StyleSheet.create({
  box: {
    borderBottomWidth: 1,
    height: 60,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
  },
});
