import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Circle, Path, Rect } from 'react-native-svg'

const Radio = (props:{selected:boolean}) => {

    if(props.selected){
        return(
            <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      //@ts-expect-error
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12} cy={12} r={9.5} fill="#fff" stroke="#405CBF" />
      <Rect
        x={1}
        y={1}
        width={22}
        height={22}
        rx={11}
        stroke="#E0EDFF"
        strokeWidth={2}
      />
      <Path
        d="M12 17.833a5.833 5.833 0 100-11.666 5.833 5.833 0 000 11.666z"
        fill="#3E3AFF"
      />
    </Svg>
        );
    }
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      // @ts-expect-error
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12} cy={12} r={9.5} fill="#fff" stroke="#405CBF" />
      <Rect
        x={1}
        y={1}
        width={22}
        height={22}
        rx={11}
        stroke="#E0EDFF"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default Radio

const styles = StyleSheet.create({})