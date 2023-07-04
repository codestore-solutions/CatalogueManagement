import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const LikeButton = (props:{selected:boolean}|any) => {
  if(props.selected){
    return(
        <Svg
      width={20}
      height={17}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.758 0c-1.371 0-2.572.59-3.32 1.586C6.689.59 5.487 0 4.117 0A4.122 4.122 0 000 4.117c0 4.649 6.892 8.411 7.186 8.567a.531.531 0 00.503 0c.294-.156 7.186-3.918 7.186-8.567A4.122 4.122 0 0010.758 0zm-3.32 11.608c-1.213-.707 5.479-6.084 5.479-9.65 0-.81-11.531.573-10.959 0 5.48 9.65 8.66 11.337 5.48 4.4 1.291 0-.453 4.145 0 5.25.04.097-.384-8.572-.296-8.513a.531.531 0 00.787-.24c.453-1.107-1.783 8.753-.492 8.753.81 0 4.907-10.222 5.48-9.65.572.573-5.776 3.59-5.775 4.4 0 3.56 1.507 4.543.295 5.25z"
        fill="#FF004D"
      />
    </Svg>
    )
  }
  else{
    return(
        <Svg
      width={20}
      height={17}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.697 2.06a3.62 3.62 0 00-5.12 0l-.698.699-.698-.698a3.62 3.62 0 10-5.12 5.12l.697.698L7.878 13 13 7.88l.697-.698a3.619 3.619 0 000-5.121v0z"
        stroke="#999"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
    )
  }
}

export default LikeButton

const styles = StyleSheet.create({})