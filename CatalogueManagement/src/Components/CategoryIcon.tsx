import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { G, Path, Defs } from 'react-native-svg'

const CategoryIcon = (props:any,focused:boolean) => {
    if(focused){
        return (
            <View>
                   <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 3H3v7h7V3zM21 3h-7v7h7V3zM21 14h-7v7h7v-7zM10 14H3v7h7v-7z"
        stroke="#777"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
            </View>
          )
      }
      else{
        return <View></View>
      }
}

export default CategoryIcon

const styles = StyleSheet.create({})