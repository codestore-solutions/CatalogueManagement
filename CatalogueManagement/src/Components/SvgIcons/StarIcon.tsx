import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const StarIcon = (props:any) => {
  return (
    <View>
      <Svg
      width={31}
      height={31}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.5 23.586l-9.11 5.1 2.034-10.241L.76 11.356l10.368-1.23L15.5.647l4.372 9.48 10.369 1.23-7.665 7.089 2.034 10.24-9.11-5.1zm0-2.96l5.486 3.07-1.225-6.166 4.615-4.268-6.242-.74L15.5 6.813l-2.633 5.709-6.243.739 4.615 4.268-1.224 6.166 5.484-3.07z"
        fill="#000"
      />
    </Svg>
    </View>
  )
}

export default StarIcon

const styles = StyleSheet.create({})