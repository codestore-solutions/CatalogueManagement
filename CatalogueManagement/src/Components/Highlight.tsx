import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PrimaryColor, SecondaryColor} from '../Constants/colors';

type propType = {title: string; selected: boolean};

const Highlight = (props: propType) => {
  return (
    <View
      style={[
        styles.body,
        {backgroundColor: props.selected ? PrimaryColor : SecondaryColor},
      ]}>
      <Text
        style={[
          styles.title,
          {
            color: props.selected
              ? 'rgba(255, 255, 255, 1)'
              : 'rgba(126, 130, 153, 1)',
          },
        ]}>
        {props.title}
      </Text>
    </View>
  );
};

export default Highlight;

const styles = StyleSheet.create({
  body: {
    borderRadius: 5,
    marginRight:10,
    marginBottom:10
  },
  title: {
    fontSize: 16,
    marginHorizontal:10,
    marginVertical:5
  },
});
