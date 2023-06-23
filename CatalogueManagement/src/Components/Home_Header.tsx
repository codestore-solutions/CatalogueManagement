import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
// import {Avatar} from 'react-native-widgetsui';

const Home_Header = (props:{navigation:{navigate:(arg:string)=>void}}) => {
  return (
    <View style={styles.body}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
        onPress={()=>{props.navigation.navigate('Orders')}}
        >
        {/* <Avatar
        height={50}
        url='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1683543728~exp=1683544328~hmac=d34f12815404ea30581df27e1901be77f843abcb45cfa558d8ccae1aae59b12f'
        /> */}
        <Image
        style={styles.image}
        source={{uri:'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1683543728~exp=1683544328~hmac=d34f12815404ea30581df27e1901be77f843abcb45cfa558d8ccae1aae59b12f'}}
        />
        </TouchableOpacity>
        <View style={{alignSelf:'center',marginLeft:10}}>
        <Text style={{color:'white',fontSize:24,fontWeight:'500'}}>Hi, User</Text>
        <Text style={{color:'white',fontSize:16}}>Default address</Text>
        </View>
      
      </View>
      <View style={styles.search}>
        <Text style={{fontSize:18,margin:8}} onPress={()=>{
        }}>🍳 Search...</Text>
      </View>
    </View>
  );
};

export default Home_Header;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#7e72ff',
    padding:20,
    alignItems:'flex-start',
    justifyContent:'center'
  },
  search:{
    backgroundColor:'white',
    height:45,
    borderRadius:50,
    width:'100%',
    justifyContent:'center',
    marginTop:20
  },
  image:{
    height:50,
    width:50,
    borderRadius:50
  }
});
