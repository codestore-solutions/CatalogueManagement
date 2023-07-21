import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import Divider from '../../Components/Divider'
import ProfileCard from '../../Components/ProfileCard'
import CartIcon from '../../Components/SvgIcons/CartIcon'
import StarIcon from '../../Components/SvgIcons/StarIcon'
import CouponIcon from '../../Components/SvgIcons/CouponIcon'
import SettingsIcon from '../../Components/SvgIcons/SettingsIcon'
import LogOutIcon from '../../Components/SvgIcons/LogOutIcon'

const Menu = (props: { navigation: { navigate: (arg0: string) => void } }) => {
  return (
    <View style={styles.body}>
      <ProfileCard/>
      <Divider width={'100%'}/>
      <TouchableOpacity style={styles.card}
      onPress={()=>{props.navigation.navigate('Orders')}}
      >
        <CartIcon/>
        <Text style={styles.title}>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <StarIcon/>
        <Text style={styles.title}>Reviews</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <CouponIcon/>
        <Text style={styles.title}>Coupons</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <SettingsIcon/>
        <Text style={styles.title}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.log}>
        <LogOutIcon/>
        <Text style={styles.title}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    body:{
        backgroundColor:'white',
        height:'100%'
    },
    title:{
        fontSize:22,
        fontWeight:'400',
        color:'black',
        marginLeft:30
    },
    card:{
      flexDirection:'row',
      padding:20,
    },
    log:{
      flexDirection:'row',
      backgroundColor:'rgba(241, 243, 246, 1)',
      padding:15,
      bottom:20,
      position:'absolute',
      width:'100%'
    }
})