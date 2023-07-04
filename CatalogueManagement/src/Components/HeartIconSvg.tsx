import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const HeartIconSvg = (props:any) => {
  return (
    <View>
      <Svg
      width={55}
      height={55}
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M27.5 48.927l-3.323-3.025C12.375 35.2 4.584 28.12 4.584 19.48c0-7.081 5.545-12.604 12.604-12.604 3.987 0 7.814 1.856 10.312 4.767 2.498-2.91 6.325-4.767 10.313-4.767 7.058 0 12.604 5.523 12.604 12.604 0 8.64-7.792 15.721-19.594 26.423L27.5 48.927z"
        fill="#CCC"
      />
    </Svg>
    </View>
  )
}

export default HeartIconSvg

const styles = StyleSheet.create({})