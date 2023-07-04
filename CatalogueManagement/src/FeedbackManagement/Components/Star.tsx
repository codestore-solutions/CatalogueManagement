import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const Star = (props:{selected:boolean}) => {
  if(props.selected){
    return(
      <Svg
      width={22}
      height={20}
      viewBox="0 0 22 20"
      fill="none"
      // @ts-expect-error
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.895 20l1.707-7.395L.878 7.632l7.562-.658L11.381 0l2.941 6.974 7.562.658-5.724 4.973L17.867 20l-6.486-3.921L4.895 20z"
        fill="#FB8A05"
      />
    </Svg>
    )
  }
  else{
    return (
      <Svg
      width={22}
      height={20}
      viewBox="0 0 22 20"
      fill="none"
      // @ts-expect-error
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.77 20l1.707-7.395L.753 7.632l7.562-.658L11.256 0l2.941 6.974 7.562.658-5.724 4.973L17.742 20l-6.486-3.921L4.77 20z"
        fill="#CCC"
      />
    </Svg>
      )
  }
}

export default Star

const styles = StyleSheet.create({})