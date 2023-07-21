import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const CartIcon = (props:any) => {
  return (
    <View>
      <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.25 27.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM25 27.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM1.25 1.25h5L9.6 17.988A2.5 2.5 0 0012.1 20h12.15a2.5 2.5 0 002.5-2.012l2-10.488H7.5"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
    </View>
  )
}

export default CartIcon

const styles = StyleSheet.create({})