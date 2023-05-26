import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';


const Recommended = () => {
  return (
    <View
    style={{marginTop:20}}
    >
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          marginLeft: 15,
          fontWeight: '500',
        }}>
        Recommended
      </Text>
      <FlatList
      style={{margin:10}}
        data={Array(3)}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.body}>
              <Image
              source={{uri:'https://cdn.mos.cms.futurecdn.net/JxJ548FZEJo2SnDQqK6qK7.jpg'}}
              style={{height:'65%',width:'100%',borderTopLeftRadius:15,borderTopRightRadius:15}}
              />
            <Text
              style={{
                color: 'black',
                fontWeight: '500',
                fontSize: 16,
                margin: 10,
              }}>
              Upto 80% off on smartwatches
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({
  body: {
    height: 180,
    width: 180,
    backgroundColor: '#f1f3f6',
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 5,
    elevation:5
  },
});
