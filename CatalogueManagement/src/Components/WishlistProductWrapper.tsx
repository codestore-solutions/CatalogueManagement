import { StyleSheet, Text, View, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductListCard from './ProductListCard'
import ProductServices from '../CatalogueModule/Services/ProductsServices'

const WishlistProductWrapper = (props:{prodId:number,navigation: { navigate: (arg: string, arg0: Object) => void }}) => {

   
  const [data, setdata] = useState(null);

  async function getData() {
    await ProductServices.getProduct(props.prodId)
    .then(res => {setdata(res?.data)})
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <FlatList 
    data={data}
    renderItem={({item})=>(
        // <ProductListCard item={{id:item.id,
        //     attachment: item.varients[0].attachment[0],
        //     name: item.name,
        //     price: item.varients.price,
        //     rating: 4}}
        //     onLike={()=>{}}
        //     liked={true}
        //     navigation={props.navigation}
        //     />
        <Text>{item.name}1</Text>
    )}
    />
  )
}

export default WishlistProductWrapper

const styles = StyleSheet.create({})