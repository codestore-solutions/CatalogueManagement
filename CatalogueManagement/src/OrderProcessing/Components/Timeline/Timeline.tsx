import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import CheckPoint from './CheckPoint';

type propType = {items:{title: string; complete: boolean}[]};

const Timeline = (props: propType) => {
  return (
    <View style={styles.body}>
      <FlatList
        data={props.items}
        renderItem={({item, index}) => (
          <CheckPoint
            title={props.items[index].title}
            completed={props.items[index].complete}
            index={index}
          />
        )}
      />
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
