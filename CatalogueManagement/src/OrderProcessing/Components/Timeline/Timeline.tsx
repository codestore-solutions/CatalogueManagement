import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import CheckPoint from './CheckPoint';

type propType = {items: {title: string; complete: boolean}[]};

const Timeline = (props: propType) => {
  return (
    <View style={styles.body}>
      {[
        {title: 'Ordered', complete: true},
        {title: 'Shipped', complete: true},
        {title: 'Out for delivery', complete: false},
        {title: 'Arriving Today', complete: false},
      ].map((item: any, index: any) => (
        <CheckPoint
          title={item.title}
          completed={item.complete}
          index={index}
        />
      ))}
    </View>
  );
};

export default Timeline;

const styles = StyleSheet.create({
  body: {},
  stepBox: {
    flexDirection: 'row',
  },
});
