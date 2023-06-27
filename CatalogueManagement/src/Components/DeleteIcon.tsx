import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const DeleteIcon = (props:any) => {
  return (
    <View>
      <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.879 5.03h3.636a1.818 1.818 0 00-3.636 0zm-1.212 0a3.03 3.03 0 016.06 0h6.06a.606.606 0 110 1.212H20.51l-1.447 12.539A3.636 3.636 0 0115.451 22H9.943a3.637 3.637 0 01-3.612-3.22L4.884 6.243H3.606a.606.606 0 110-1.212h6.06zM7.535 18.642a2.424 2.424 0 002.408 2.146h5.508a2.424 2.424 0 002.408-2.146l1.43-12.4H6.105l1.43 12.4zm3.344-9.37a.606.606 0 01.606.607v7.272a.606.606 0 11-1.212 0V9.88a.606.606 0 01.606-.606zm4.242.607a.606.606 0 10-1.212 0v7.272a.606.606 0 101.212 0V9.88z"
        fill="#F1416C"
      />
    </Svg>
    </View>
  )
}

export default DeleteIcon

const styles = StyleSheet.create({})