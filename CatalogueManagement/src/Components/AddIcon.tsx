import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { G, Rect, Path, Defs } from 'react-native-svg'

const AddIcon = (props:any) => {
  return (
    <View style={styles.body}>
      <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_724_4828)">
        <Rect x={1.7998} width={29.2} height={28.0769} rx={8} fill="#fff" />
        <Rect
          x={2.2998}
          y={0.5}
          width={28.2}
          height={27.0769}
          rx={7.5}
          stroke="#EAEAEA"
        />
      </G>
      <Path
        d="M10.784 14.6H16.4m0 0h5.615m-5.615 0V8.985m0 5.615v5.615"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs></Defs>
    </Svg>
    </View>
  )
}

export default AddIcon

const styles = StyleSheet.create({
  body:{
    elevation:1,
    marginHorizontal:10
  }
})