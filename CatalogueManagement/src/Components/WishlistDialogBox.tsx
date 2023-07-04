import { StyleSheet, Text, TextInput, TouchableOpacity, View ,Alert} from 'react-native'
import React, { useState } from 'react'
import CutIcon from './CutIcon'
import Divider from './Divider'
import SubmitButton from './SubmitButton'
import ProductServices from '../CatalogueModule/Services/ProductsServices'

const WishlistDialogBox = (props:{title:string,setVisible: (arg0: boolean) => void,name:string,wishId:number;state: (arg0: boolean) => void}) => {

    const [name, setname] = useState(props.name)

    async function setData() {
        await ProductServices.updateWishlistName(props.wishId,name).catch(err=>{Alert.alert('Something went wrong')})
    }
  return (
    <View style={styles.body}>
         <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
            <TouchableOpacity
              onPress={()=>{props.setVisible(false)}}
            >
              <CutIcon/>
            </TouchableOpacity>
          </View>
        <Divider width={'100%'}/>
        <TextInput
            value={name}
            style={styles.input}
            onChangeText={(val)=>{setname(val)}}
        />
        <TouchableOpacity style={styles.footer} onPress={() => {
            setData();
       props.setVisible(false)
       props.state(false);
      }}>
    <Text style={{color: 'white'}}>Submit</Text>
  </TouchableOpacity>
    </View>
  )
}

export default WishlistDialogBox

const styles = StyleSheet.create({
    body:{
        width:'95%',
        backgroundColor:'white',
        borderRadius:10,
        padding:20
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
      },
      title:{
        fontSize:18,
        fontWeight:'500',
        color:'#000000',
      },
      input:{
        borderWidth:1,
        borderColor:'#000000',
        borderRadius:25,
        marginVertical:20,
        paddingHorizontal:20
      },
      footer: {
        width: '100%',
        height: 50,
        backgroundColor: '#7E72FF',
        bottom: 15,
        alignSelf: 'center',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20
      }
})