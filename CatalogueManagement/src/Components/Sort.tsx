import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Highlight from './Highlight';

type propType = {
  visible: boolean;
  setvisible: (arg0: boolean) => void;
  lowtohigh: () => void;
  hightolow:()=> void;
};
const Sort = (props: propType) => {
  return (
    <Modal visible={props.visible} transparent={true}>
      <View style={styles.modal}>
        <View style={styles.sort}>
          <View style={styles.filterHeader}>
            <Text style={styles.heading}>Sort</Text>
            <Text
              onPress={() => {
                props.setvisible(!props.visible);
              }}
              style={styles.clear}>
              Clear All
            </Text>
          </View>
          <View style={styles.high}>
            <TouchableOpacity
              onPress={() => {
                props.lowtohigh();
              }}>
              <Highlight title="Price: Low to High" selected={true} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>{
                props.hightolow();
              }}
            >
            <Highlight title="Price: High to Low" selected={true} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Sort;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
  },
  sort: {
    backgroundColor: 'white',
    bottom: 0,
    padding: 20,
    position: 'absolute',
    width: '100%',
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 1)',
  },
  clear: {
    color: 'rgba(241, 65, 108, 1)',
    fontSize: 18,
    fontWeight: '400',
  },
  high: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
