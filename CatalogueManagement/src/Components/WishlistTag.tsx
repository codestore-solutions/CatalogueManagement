import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import EditIcon from './EditIcon'
import DeleteIcon from './DeleteIcon'

const WishlistTag = (props:{title:string}) => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{props.title}</Text>
      <View style={styles.iconBox}>
        <TouchableOpacity style={styles.edit}>
        <EditIcon/>
        </TouchableOpacity>
        <TouchableOpacity>
        <DeleteIcon/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default WishlistTag

const styles = StyleSheet.create({
    body:{
        marginHorizontal:20,
        marginVertical:10,
        borderRadius:15,
        backgroundColor:'#F9F9F9',
        height:46,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    text:{
        fontSize:16,
        fontWeight:'400',
        color:'#000000',
        margin:8
    },
    iconBox:{
        flexDirection:'row',
        marginHorizontal:10
    },
    edit:{
        marginRight:10
    }
})