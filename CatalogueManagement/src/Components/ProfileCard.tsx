import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const ProfileCard = () => {
  return (
    <View
    style={styles.body}
    >
      <Image
      style={styles.img}
      source={{uri:'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1683543728~exp=1683544328~hmac=d34f12815404ea30581df27e1901be77f843abcb45cfa558d8ccae1aae59b12f'}}
      />
      <View>
        <Text style={styles.title}>Hi, User</Text>
        <Text style={styles.address}>G18 Noida </Text>
      </View>
    </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
    body:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:30
    },
    img:{
        height:70,
        width:70,
        borderRadius:70,
        borderWidth:1,
        borderColor:'black',
        margin:20
    },
    title:{
        fontSize:22,
        fontWeight:'600',
        color:'black',
    },
    address:{
        color:'rgba(126, 130, 153, 1)',
        fontSize:16,
        fontWeight:'500',
        marginTop:5
    }
})