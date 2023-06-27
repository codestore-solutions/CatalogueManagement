import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';
import Products from '../CatalogueModule/Screens/Products';
import CategoriesScreen from '../CatalogueModule/Screens/CategoriesScreen';
import Cart from '../CatalogueModule/Screens/Cart';
import Profile from '../CatalogueModule/Screens/Profile';
import MyTabBar from '../Components/TabBar';
import SvgComponent from '../Components/TabBarIcons/HomeIcon';
import HomeIcon from '../Components/HomeIcon';
import CategoryIcon from '../Components/CategoryIcon';
import CartIcon from '../Components/CartIcon';
import ProfileIcon from '../Components/ProfileIcon';
import Wishlist from '../CatalogueModule/Screens/Wishlist';
import AddWishlistButton from '../Components/AddWishlistButton';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      // tabBar={props => (
      //   <MyTabBar
      //     state={props.state}
      //     navigation={props.navigation}
      //     descriptors={props.descriptors}
      //   />
      // )}
      >
        
      <Tab.Screen
        component={Products}
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <HomeIcon focused={focused}/>
            );
          }
        }}
      />

      <Tab.Screen component={CategoriesScreen} name="Category" options={{
        tabBarIcon: ({ focused }) => {
          return (
            <CategoryIcon focused={focused}/>
          );
        }
      }} />

      <Tab.Screen
        component={Cart}
        name="Cart"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <CartIcon focused={focused}/>
            );
          }
        }}
      />

      <Tab.Screen
        component={Wishlist}
        name="Wishlist"
        options={{
          headerTitle: 'Wishlists',
          tabBarIcon: ({ focused }) => {
            return (
              <ProfileIcon focused={focused}/>
            );
          },
          headerRight: (()=>(<AddWishlistButton/>))
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
