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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabNavigator from './TabNavigator';
import FlashScreen from '../CatalogueModule/Screens/FlashScreen';
import Login from '../UserManagement/Screens/Login';
import Payment from '../OrderProcessing/Screens/Payment';
import Gateway from '../OrderProcessing/Screens/Gateway';
import Orders from '../OrderProcessing/Screens/Orders';
import OrderDetails from '../OrderProcessing/Screens/OrderDetails';
import CancelOrder from '../OrderProcessing/Screens/CancelOrder';
import OrderTracking from '../OrderProcessing/Screens/OrderTracking';
import ProductsGrid from '../CatalogueModule/Screens/ProductsGrid';
import WishlistProducts from '../CatalogueModule/Screens/WishlistProducts';
import FeedbackForm from '../FeedbackManagement/Screens/FeedbackForm';
const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Flash"
          component={FlashScreen}
          options={{
            headerShown: false,
            statusBarColor: 'white',
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShadowVisible: false,
            headerTitle: '',
          }}
        />
        {/* <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
            statusBarColor: 'white',
          }}
        />
        <Stack.Screen
          name="OTP"
          component={Otpscreen}
          options={{
            headerShown: false,
            statusBarColor: 'white',
          }}
        /> */}
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{
            headerShown: false,
            statusBarColor: '#7e72ff',
          }}
        />
        <Stack.Screen
          name="Products"
          component={ProductsList}
          options={({navigation, route}: {navigation: any; route: any}) => ({
            headerTitle: route.params.title,
          })}
        />

        <Stack.Screen
          name="Product"
          component={ProductDetails}
          options={{
            headerShown: false,
            statusBarColor: 'white',
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

        <Stack.Screen
          name="ProductsGrid"
          component={ProductsGrid}
          options={{
            title: 'Products List',
          }}
        />

      

        <Stack.Screen
          name="Error"
          component={ErrorScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="Payment" component={Payment} />

        <Stack.Screen name="Orders" component={Orders} />

        <Stack.Screen name="CancelOrder" component={CancelOrder} />

        <Stack.Screen name="OrderDetails" component={OrderDetails} />

        <Stack.Screen name="Gateway" component={Gateway} />

        <Stack.Screen name="OrderTracking" component={OrderTracking} />

        <Stack.Screen
          name="WishlistProducts"
          component={WishlistProducts}
          options={{
            title:''
          }
          }
        />
        <Stack.Screen
        name='Feedback'
        component={FeedbackForm}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
