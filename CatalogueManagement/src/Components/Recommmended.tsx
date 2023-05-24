import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const Recommended = () => {
  return (
    <View style={styles.body}>
    <Text style={{color:'black'}}>Recommendations</Text>
    <FlatList
    data={['','','','','','','']}
    horizontal
    renderItem={({item})=>(
        <View style={styles.card}></View>
    )}
    />
    </View>
  )
}

export default Recommended

const styles = StyleSheet.create({
    body:{
        height:180,
        margin:10,
        backgroundColor:'#D9E0EC',
        borderRadius:10,
        padding:5,
        marginBottom:50
    },
    card:{
        height:120,
        width:110,
        backgroundColor:'#9cc0c5',
        margin:5,
        borderRadius:5
    }
})