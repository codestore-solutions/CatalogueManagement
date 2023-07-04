import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const CutIcon = (props:any) => {
  return (
    <View>
       <Svg
      width={14}
      height={16}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 14.403l12-12.74-12 12.74zm0-12.74l12 12.74L1 1.663z"
        fill="#000"
      />
      <Path
        d="M1 14.403l12-12.74m-12 0l12 12.74"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
    </View>
  )
}

export default CutIcon

const styles = StyleSheet.create({})