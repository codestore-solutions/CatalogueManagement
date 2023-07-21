import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const LogOutIcon = (props:any) => {
  return (
    <View>
      <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M24.083 22.667L29.75 17m0 0l-5.667-5.667M29.75 17H9.917m8.5 5.667v1.416a4.25 4.25 0 01-4.25 4.25H8.5a4.25 4.25 0 01-4.25-4.25V9.917a4.25 4.25 0 014.25-4.25h5.667a4.25 4.25 0 014.25 4.25v1.416"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
    </View>
  )
}

export default LogOutIcon

const styles = StyleSheet.create({})