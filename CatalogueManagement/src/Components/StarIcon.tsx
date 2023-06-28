import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const StarIcon = (props:any) => {
  return (
    <View>
      <Svg
      width={14}
      height={13}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.611 13l1.11-4.807L0 4.961l4.915-.428L6.827 0 8.74 4.533l4.915.428-3.72 3.232L11.042 13l-4.216-2.549L2.611 13z"
        fill="#7E72FF"
      />
    </Svg>
    </View>
  )
}

export default StarIcon

const styles = StyleSheet.create({})