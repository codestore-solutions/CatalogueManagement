import { StyleSheet, Text, Image,View } from 'react-native'
import React from 'react'
import { ListTile, PillButton } from 'react-native-widgetsui'
import { useEffect, useState } from 'react'
import ProductServices from '../CatalogueModule/Services/ProductsServices'

const WishlistChild = (props:{prodID:number|string}) => {
    const [data, setdata] = useState<{image:string,title:string,price:string}>(Object);

    async function getData(){
       const res = await ProductServices.getProduct(props.prodID.toString()[0])
        setdata(res?.data)
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <View style ={styles.body}>
       <View
       style={{backgroundColor:'white'}}
       >
       <Image
        source={{uri:data.image}}
        style={{height:220,width:180,margin:10}}
        />
       </View>
       <View>
        <Text>
            {data.title}
        </Text>
       </View>
    </View>
  )
}

export default WishlistChild

const styles = StyleSheet.create({
    body:{
        flexDirection:"row",
        borderBottomWidth:1
    }
})