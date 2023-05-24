import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ProductCard = (props:{url:string}) => {
  return (
        <View style={styles.body}>
            <Image
        style={{width:340,height:400}}
        source={
            { uri: props.url }
          }
        />
        </View>
  )
}

export default ProductCard                
                                   
const styles = StyleSheet.create({
    body:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      width:400
    }
})