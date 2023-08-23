import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {COLORS} from '../Constants/colors';
// import {Avatar} from 'react-native-widgetsui';

const Home_Header = (props: {
  navigation: {navigate: (arg: string) => void};
}) => {
  return (
    <View style={styles.body}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Orders');
          }}>
          {/* <Avatar
        height={50}
        url='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1683543728~exp=1683544328~hmac=d34f12815404ea30581df27e1901be77f843abcb45cfa558d8ccae1aae59b12f'
        /> */}
          <View style={{elevation: 10, shadowColor: '#000', borderRadius: 50}}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1683543728~exp=1683544328~hmac=d34f12815404ea30581df27e1901be77f843abcb45cfa558d8ccae1aae59b12f',
              }}
            />
          </View>
        </TouchableOpacity>
        <View style={{alignSelf: 'center', marginLeft: 10}}>
          <Text style={{color: 'white', fontSize: 24, fontWeight: '900'}}>
            Hi, User
          </Text>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>
            Default address
          </Text>
        </View>
      </View>
      <View style={styles.search}>
        <Text style={{fontSize: 20, margin: 8}} onPress={() => {}}>
          🍳
        </Text>
        <TextInput style={{fontSize: 16}} placeholder="Search..." />
      </View>
    </View>
  );
};

export default Home_Header;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#7e72ff',
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  search: {
    backgroundColor: COLORS.Light,
    height: 50,
    borderRadius: 18,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderColor: COLORS.Light,
    borderWidth: 2,
  },
});
