import { StyleSheet, Text, View, TouchableOpacity, Alert, Modal, TextInput, Button, ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import AddIcon from './AddIcon'
import ProductServices from '../CatalogueModule/Services/ProductsServices'
import { PrimaryColor } from '../Constants/colors'

const AddWishlistButton = () => {

    const [show, setshow] = useState(false)

    const [name, setname] = useState('')

    async function createWishlist(name:string) {
        await ProductServices.createWishlist(name)
        .then(()=>{setshow(!show)})
        .catch(()=>{setshow(!show); Alert.alert('Something went wrong')})
    }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Add Wishlist</Text>
      <TouchableOpacity
      onPress={()=>{setshow(!show)}}
      >
        <AddIcon/>
      </TouchableOpacity>
      <Modal visible={show} transparent={true}>
        <View style={styles.modal}>
            <View style={styles.inputBox}>
                <TextInput style={styles.input} placeholder='Enter wishlist name' onChangeText={(val)=>{setname(val)}}/>
                <View style={styles.button}>
                <Button color={PrimaryColor} title='Create' onPress={()=>{createWishlist(name)}}/>
                </View>
            </View>
        </View>
      </Modal>
    </View>
  )
}

export default AddWishlistButton

const styles = StyleSheet.create({
    body:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:16,
        fontWeight:'400',
        color:'#000000'
    },
    inputBox:{
        height:220,
        width:400,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        elevation:1
    },
    modal:{
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        width:'90%',
        borderRadius:15,
        marginVertical:20
    },
    input:{
        borderWidth:1,
        borderRadius:15,
        width:'90%'
    }
})