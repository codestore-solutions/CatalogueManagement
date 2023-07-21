import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const CouponIcon = (props:any) => {
  return (
    <View>
      <Svg
      width={25}
      height={20}
      viewBox="0 0 25 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16 5l1.5 1.5L9 15l-1.5-1.5L16 5zM2.5 0h20C23.887 0 25 1.113 25 2.5v5a2.5 2.5 0 000 5v5c0 1.387-1.113 2.5-2.5 2.5h-20A2.5 2.5 0 010 17.5v-5c1.387 0 2.5-1.113 2.5-2.5A2.5 2.5 0 000 7.5v-5A2.5 2.5 0 012.5 0zm0 2.5v3.175a4.993 4.993 0 010 8.65V17.5h20v-3.175a4.993 4.993 0 010-8.65V2.5h-20zM9.375 5c1.037 0 1.875.838 1.875 1.875A1.872 1.872 0 019.375 8.75 1.872 1.872 0 017.5 6.875C7.5 5.838 8.338 5 9.375 5zm6.25 6.25c1.038 0 1.875.838 1.875 1.875A1.872 1.872 0 0115.625 15a1.872 1.872 0 01-1.875-1.875c0-1.037.838-1.875 1.875-1.875z"
        fill="#000"
      />
    </Svg>
    </View>
  )
}

export default CouponIcon

const styles = StyleSheet.create({})