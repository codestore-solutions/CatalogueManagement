import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const MenuIcon = (props:any) => {
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
        d="M3 12h18M3 6h18M3 18h18"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
    </View>
  )
}

export default MenuIcon

const styles = StyleSheet.create({})