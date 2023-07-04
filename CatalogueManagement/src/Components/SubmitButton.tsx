import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'

const SubmitButton = (props:{title:string,action:any}) => {
  return (
    <TouchableOpacity style={styles.footer} onPress={() => {
       props.action
      }}>
    <Text style={{color: 'white'}}>{props.title}</Text>
  </TouchableOpacity>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
    footer: {
    width: '96%',
    height: 50,
    backgroundColor: '#7E72FF',
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  }
})