import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.body}>
      <View style={styles.card}>
        <Text style={styles.name}>Mike Rev</Text>
        <View style={styles.divider}></View>
        <Text style={styles.id}>mikerev@sample.com</Text>
        <View style={styles.divider}></View> 
        <Text style={styles.id}>id: M21TR3</Text>
        <View></View>
      </View>
      <Image
        style={styles.avatar}
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#B6B6B6',
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 100,
    margin: 3,
    borderColor: 'white',
    borderWidth: 5,
    marginTop: 30,
    marginBottom: 20,
    position: 'absolute',
  },
  card: {
    backgroundColor: '#0F2C3C',
    width: '95%',
    borderRadius: 20,
    paddingTop: 80,
    flex: 1,
    alignItems: 'center',
    margin: 10,
    marginTop: 130,
  },
  name: {
    color: 'white',
    fontSize: 36,
  },
  divider: {
    width: '85%',
    height: 2,
    backgroundColor: 'black',
    marginVertical: 20,
  },
  id: {
    color: 'white',
    fontSize: 18,
  },
  emo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  emojibox: {
    margin: 30,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1d4a5d',
    maxHeight: 80,
    borderRadius: 5,
  },
  emoji: {
    fontSize: 28,
    color: 'white',
  },
});
