import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const SettingsIcon = (props:any) => {
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
        d="M25.704 16.352a1.292 1.292 0 010-1.704l1.654-1.86a1.292 1.292 0 00.154-1.512L24.93 6.807a1.292 1.292 0 00-1.382-.62l-2.428.49a1.292 1.292 0 01-1.486-.852l-.788-2.363a1.291 1.291 0 00-1.227-.879h-5.166a1.292 1.292 0 00-1.292.879l-.723 2.363a1.292 1.292 0 01-1.486.853l-2.493-.49a1.292 1.292 0 00-1.291.62l-2.584 4.468a1.292 1.292 0 00.13 1.511l1.64 1.86a1.292 1.292 0 010 1.705l-1.64 1.86a1.292 1.292 0 00-.13 1.512l2.584 4.469a1.291 1.291 0 001.382.62l2.428-.49a1.292 1.292 0 011.486.852l.787 2.363a1.292 1.292 0 001.292.879h5.167a1.292 1.292 0 001.227-.879l.788-2.363a1.292 1.292 0 011.485-.853l2.428.49a1.292 1.292 0 001.383-.62l2.583-4.468a1.292 1.292 0 00-.155-1.512l-1.744-1.86zm-1.924 1.731l1.033 1.163-1.653 2.867-1.525-.31a3.875 3.875 0 00-4.456 2.584l-.49 1.446h-3.307l-.465-1.472a3.875 3.875 0 00-4.457-2.584l-1.524.31-1.679-2.854L6.29 18.07a3.875 3.875 0 000-5.166L5.257 11.74 6.91 8.9l1.525.31a3.875 3.875 0 004.456-2.584l.49-1.46h3.307l.491 1.473a3.875 3.875 0 004.456 2.583l1.525-.31 1.653 2.868-1.033 1.163a3.875 3.875 0 000 5.14zm-8.745-7.75a5.166 5.166 0 100 10.333 5.166 5.166 0 000-10.333zm0 7.75a2.583 2.583 0 110-5.166 2.583 2.583 0 010 5.166z"
        fill="#000"
      />
    </Svg>
    </View>
  )
}

export default SettingsIcon

const styles = StyleSheet.create({})