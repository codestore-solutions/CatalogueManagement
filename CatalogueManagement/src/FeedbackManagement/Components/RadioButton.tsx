import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import Radio from './Radio';

const RadioButton = (props: {
  lables: string[];
  horizontal: boolean;
  selected: (arg0: string) => void;
}) => {
  const [selected, setselected] = useState(-1);
  return (
    <View>
      <FlatList
        horizontal={props.horizontal}
        data={props.lables}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.label}
            onPress={() => {
              setselected(index);
              props.selected(item);
            }}>
            <Radio selected={selected == index} />
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  list: {},
  label: {
    flexDirection: 'row',
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 18,
    marginLeft: 8,
  },
});
