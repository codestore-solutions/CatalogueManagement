import {
  ProgressBarAndroidBase,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
import {useRoute} from '@react-navigation/native';
import OrderServices from '../Services/OrderServices';
import OrderingService from '../../services/OrderingService';

const Gateway = (props: any) => {
  const route: any = useRoute();
  useEffect(() => {
    // props.navigation.navigate('Orders')
    console.log('Order => ', JSON.stringify(route.params));
    OrderingService.createOrder(route.params)
      .then((res: any) => {
        console.log(res.data);
        props.navigation.navigate('Orders');
      })
      .catch(console.log);
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      <Text style={{fontSize: 22, color: '#7E72FF'}}>Payment Processing</Text>
      <Svg
        width={200}
        height={170}
        viewBox="0 0 258 225"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <G
          filter="url(#filter0_d_52_2941)"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#7E72FF">
          <Path d="M151 143.5c0 .167.002.334.005.5h-41.01c.003-.166.005-.333.005-.5 0-14.083-11.417-25.5-25.5-25.5-13.74 0-24.943 10.868-25.48 24.476-6.424-1.811-12.159-5.24-17.203-10.284C33.939 124.314 30 114.75 30 103.5c-.006-10.344 3.405-19.38 10.233-27.108C47.061 68.664 55.65 64.2 66 63c-.006-17.544 6.105-32.43 18.333-44.658C96.561 6.114 111.45 0 129 0c14.25 0 27 4.275 38.25 12.825 11.25 8.55 18.75 19.725 22.5 33.525 11.4 2.55 20.625 8.4 27.675 17.55C224.475 73.05 228 83.475 228 95.175c.006 13.65-4.83 25.2-14.508 34.65-3.698 3.611-7.686 6.532-11.965 8.763C199.238 126.855 188.903 118 176.5 118c-14.083 0-25.5 11.417-25.5 25.5z" />
          <Path d="M176.5 165c-11.874 0-21.5-9.626-21.5-21.5s9.626-21.5 21.5-21.5 21.5 9.626 21.5 21.5-9.626 21.5-21.5 21.5zm0-11c-5.799 0-10.5-4.701-10.5-10.5s4.701-10.5 10.5-10.5 10.5 4.701 10.5 10.5-4.701 10.5-10.5 10.5zM84.5 165c-11.874 0-21.5-9.626-21.5-21.5S72.626 122 84.5 122s21.5 9.626 21.5 21.5S96.374 165 84.5 165zm0-11c-5.799 0-10.5-4.701-10.5-10.5S78.701 133 84.5 133 95 137.701 95 143.5 90.299 154 84.5 154z" />
        </G>
        <Defs></Defs>
      </Svg>
      <ActivityIndicator size={70} color={'#7E72FF'} />
    </View>
  );
};

export default Gateway;

const styles = StyleSheet.create({});
