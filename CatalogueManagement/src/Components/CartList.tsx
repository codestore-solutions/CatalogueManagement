import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import CartItem from './CartItem'

const CartList = (props:{data: {name:string,price:number,quantity:number,url:string}[]}) => {
  return (
    <FlatList
          data={props.data}
          scrollEnabled={false}
          renderItem={({item,index}) => (                                                                            
            <CartItem
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              url={item.url}
              index={index}
            />
          )}
        /> 
  );
}

export default CartList
                                                                
const styles = StyleSheet.create({})
                   