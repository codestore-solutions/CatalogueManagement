import { StyleSheet, Text, View, TouchableOpacity ,FlatList} from 'react-native'
import React from 'react'
import Star from './Star'

const StarRating = (props:{selected:number,onSelect: (arg0: number) => void}) => {
  return (
    <View style={styles.body}>
        <FlatList
        data={Array(5)}
        horizontal
        scrollEnabled={false}
        renderItem={({item,index})=>(
            <TouchableOpacity 
                onPress={()=>{props.onSelect(index+1)}}
                style={styles.icon}
            >
                <Star selected={index < props.selected}/>
            </TouchableOpacity>
        )}
        />
    </View>
  )
}

export default StarRating

const styles = StyleSheet.create({
    body:{
        flexDirection:'row'
    },
    icon:{marginRight:10}
})