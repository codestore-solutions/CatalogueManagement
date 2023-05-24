import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bill = (props:{items:number,total:number}) => {
  return (
    <View style={styles.body}>
        <View style={styles.div}></View>
        <View style={{flexDirection:'row',justifyContent:"space-between"}}>
            <View style={styles.tags}>
                <Text style={styles.Text}>Items</Text>
                <Text style={styles.Text}>Total Cost</Text>
                <Text style={styles.Text}>Taxes</Text>
                <Text style={styles.Text}>Delivery Charge</Text>
                <Text style={styles.Text}>Other Charges</Text>
            </View>
            <View style={styles.tags}>
            <Text style={styles.Text}>{props.items}</Text>
                <Text style={styles.Text}>₹{props.total}/-</Text>
                <Text style={styles.Text}>0</Text>
                <Text style={styles.Text}>80</Text>
                <Text style={styles.Text}>0</Text>
            </View>
        </View>
        <View style={styles.total}>
                <Text style={styles.Text}>Grand Total</Text>
                <Text style={styles.Text}>₹{props.total+80}/-</Text>
        </View>
    </View>
  )
}

export default Bill

const styles = StyleSheet.create({
    body:{
        backgroundColor:'white',
        marginHorizontal:10,
        marginVertical:16,
        borderRadius:25,
        elevation:10
    },
    div:{
        height:30,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        borderStyle:"dashed"
    },
    tags:{
        margin:10,
    },
    Text:{
        fontSize:20,
        marginVertical:5
    },
    total:{
        borderTopColor:'grey',
        borderTopWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20
    }
})