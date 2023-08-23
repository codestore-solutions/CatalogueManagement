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
import Menu from '../CatalogueModule/Screens/Menu';
import MenuIcon from '../Components/MenuIcon';
import HomeOutline from '../Components/SvgIcons/BottomTabIcons/HomeOutline';
import HomeFilledActive from '../Components/SvgIcons/BottomTabIcons/HomeFilledActve';

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
      // sceneContainerStyle={{backgroundColor: 'white', paddingBottom: 60}}
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          height: 60,
          paddingTop: 5,
          paddingHorizontal: 5,
          borderWidth: 1,
          borderTopWidth: 1,
          borderColor: '#eee',
        },
        tabBarShowLabel: false,
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      <Tab.Screen
        component={Products}
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? <HomeFilledActive /> : <HomeOutline />,
        }}
      />

      <Tab.Screen
        component={Wishlist}
        name="Wishlist"
        options={{
          headerTitle: 'Wishlists',
          tabBarIcon: ({focused}) => {
            return <CategoryIcon focused={focused} />;
          },
          headerRight: () => <AddWishlistButton />,
        }}
      />

      {/* <Tab.Screen
        component={CategoriesScreen}
        name="Category"
        options={{
          tabBarIcon: ({focused}) => {
            return <CategoryIcon focused={focused} />;
          },
        }}
      /> */}

      <Tab.Screen
        component={Cart}
        name="Cart"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return <CartIcon focused={focused} />;
          },
        }}
      />

      <Tab.Screen
        component={Menu}
        name="Menu"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return <MenuIcon />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
