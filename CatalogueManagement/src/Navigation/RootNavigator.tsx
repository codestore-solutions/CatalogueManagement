import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from '../CatalogueModule/Screens/ProductDetails';
import Cart from '../CatalogueModule/Screens/Cart';
import BuyNow from '../CatalogueModule/Screens/BuyNow';
import ProductsList from '../CatalogueModule/Screens/ProductsList';
import {Text, View} from 'react-native';
import Products from '../CatalogueModule/Screens/Products';
import Wishlist from '../CatalogueModule/Screens/Wishlist';
import ErrorScreen from '../CatalogueModule/Screens/ErrorScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigator from './TabNavigator';
import FlashScreen from '../CatalogueModule/Screens/FlashScreen';
import Login from '../UserManagement/Screens/Login';
import Signup from '../UserManagement/Screens/Signup';
import Otpscreen from '../UserManagement/Screens/Otpscreen';
const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='Flash'
        component={FlashScreen}
        options={{
          headerShown:false,
          statusBarColor:'white'
        }}
        />
        <Stack.Screen
        name='Login'
        component={Login}
        
        options={{
          headerShadowVisible:false,
          headerTitle:''
        }}
        />
        <Stack.Screen
        name='Signup'
        component={Signup}
        options={{
          headerShown:false,
          statusBarColor:'white'
        }}
        />
        <Stack.Screen
        name='OTP'
        component={Otpscreen}
        options={{
          headerShown:false,
          statusBarColor:'white'
        }}
        />
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{
            headerShown: false,
            statusBarColor:'#7e72ff'
          }}
        />
        <Stack.Screen
          name="Products"
          component={ProductsList}
          options={({navigation, route}: {navigation: any; route: any}) => ({
            headerTitle: route.params.title,
            headerRight: props => (
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{fontSize: 20}}
                  onPress={() => {
                    navigation.navigate('Wishlist');
                  }}>
                  ❤
                </Text>
                <Text
                  style={{fontSize: 20, color: 'black', marginLeft: 8}}
                  onPress={() => {
                    navigation.navigate('Cart');
                  }}>
                  🛒
                </Text>
              </View>
            ),
          })}
        />

        <Stack.Screen
          name="Product"
          component={ProductDetails}
          options={{
            headerShown: false,
            statusBarColor:'white'
          }}
        />

        <Stack.Screen name="Cart" component={Cart} />

        <Stack.Screen
          name="Buynow"
          component={BuyNow}
          options={{
            title: '',
          }}
        />

        <Stack.Screen name="Wishlist" component={Wishlist} />

        <Stack.Screen
        name='Error'
        component={ErrorScreen}
        options={{
          headerShown: false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
