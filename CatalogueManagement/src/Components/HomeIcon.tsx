import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { G, Path, Defs } from 'react-native-svg'

const HomeIcon = (props:any,focused:boolean) => {
  if(focused){
    return (
        <View>
           <Svg
          width={28}
          height={28}
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <G filter="url(#filter0_d_177_3504)">
            <Path
              d="M14.433.16a.666.666 0 00-.866 0L4 8.36V18a2 2 0 002 2h5.333a.666.666 0 00.667-.667v-4a2 2 0 014 0v4a.667.667 0 00.667.667H22a2 2 0 002-2V8.36L14.433.16z"
              fill="#7E72FF"
            />
          </G>
          <Defs></Defs>
        </Svg>
        </View>
      )
  }
  else{
    return <View></View>
  }
}

export default HomeIcon

const styles = StyleSheet.create({})