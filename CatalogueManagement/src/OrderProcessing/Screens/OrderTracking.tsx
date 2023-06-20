import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import API from '../../Services/API_Services'
import Svg, { Path } from 'react-native-svg';
import Divider from '../../Components/Divider';

const OrderTracking = (props:any) => {
   let data = API.getProductDetails('');
  return (
    <View style={{backgroundColor:'white',height:'100%'}}>
      <View style={{flexDirection: 'row', marginVertical: 20}}>
        <Image
          source={{uri: data.Attachment[0]}}
          style={{height: 100, width: 100}}
        />
        <View style={{width: '65%'}}>
          <Text
            numberOfLines={2}
            style={{fontSize: 18, color: 'black', marginBottom: 10}}>
            {data.Name}
          </Text>
          <Text>Qty: 1</Text>
        </View>
      </View>
      <View style={{flexDirection:'row'}}>
        <View style={[styles.check,{backgroundColor:'#7E72FF',}]}>
        <Svg
      width={18}
      height={13}
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.55 13L.85 7.3l1.425-1.425L6.55 10.15 15.725.975 17.15 2.4 6.55 13z"
        fill="#fff"
      />
    </Svg>
        </View>
        <Text style={{color:'black',fontSize:18}}>Ordered Thursday, 31st May</Text>
      </View>
      <View style={styles.bar}></View>
      <View style={{flexDirection:'row'}}>
      <View style={[styles.check,{backgroundColor:'#7E72FF',}]}>
        <Svg
      width={18}
      height={13}
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.55 13L.85 7.3l1.425-1.425L6.55 10.15 15.725.975 17.15 2.4 6.55 13z"
        fill="#fff"
      />
    </Svg>
        </View>
        <Text style={{color:'black',fontSize:18}}>Shipped Thursday, 31st May</Text>
      </View>
      <View style={styles.unselect}></View>
      <View style={{flexDirection:'row'}}>
      <View style={[styles.check,{backgroundColor:'#DADADA',}]}>
        </View>
        <Text style={{color:'black',fontSize:18}}>Out for delivery</Text>
      </View>
      <View style={styles.unselect}></View>
      <View style={{flexDirection:'row'}}>
      <View style={[styles.check,{backgroundColor:'#DADADA',}]}>
        </View>
        <Text style={{color:'black',fontSize:18}}>Arriving</Text>
      </View>
      <View style={styles.card}>
      <Text style={{color:'black',fontSize:18}}>Your Package is on the way</Text>
      <Text style={{marginBottom:10}}>Arriving Monday</Text>
      <Divider width={'100%'}/>
      </View>
    </View>
  )
}

export default OrderTracking

const styles = StyleSheet.create({
    check:{
        marginRight:20,
        marginLeft:50,
        width:30,
        height:30,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },
    bar:{
        height:70,
        width:10,
        marginLeft:60,
        backgroundColor:'#7E72FF'
    },
    unselect:{
        height:70,
        width:10,
        marginLeft:60,
        backgroundColor:'#DADADA'
    },
    card:{
        marginTop:20,
        padding:20,
        backgroundColor:'white',
        width:'100%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        shadowRadius: 2,
        elevation:5
    }
})