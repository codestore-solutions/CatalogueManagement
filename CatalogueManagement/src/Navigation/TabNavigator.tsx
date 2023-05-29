import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native'
import Products from '../CatalogueModule/Screens/Products';
import CategoriesScreen from '../CatalogueModule/Screens/CategoriesScreen';
import Cart from '../CatalogueModule/Screens/Cart';
import Profile from '../CatalogueModule/Screens/Profile';
import MyTabBar from '../Components/TabBar';
import SvgComponent from '../Components/TabBarIcons/HomeIcon';
import { Image, SvgUri } from 'react-native-svg';



const TabNavigator = () => {
    
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    tabBar={props => <MyTabBar state={props.state} navigation={props.navigation} descriptors={props.descriptors}/>}
    >
        <Tab.Screen
        component={Products}
        name='Home'
        options={{
            headerShown:false,
            tabBarIcon:(props)=> (<SvgComponent/>),
        }}
        />
        <Tab.Screen
        component={CategoriesScreen}
        name='Category'
        options={{
            headerShown:false,
            tabBarIcon:(props)=> (<SvgComponent/>),
        }}
        />

        <Tab.Screen
        component={Cart}
        name='Cart'
        options={{
            headerShown:false,
            tabBarIcon:()=> (<SvgComponent/>),
        }}
        />

        <Tab.Screen
        component={Profile}
        name='Profile'
        options={{
            headerShown:false,
            tabBarIcon:()=> (<SvgUri uri='../Assets/HomeIcon.svg'/>),
            tabBarIconStyle:{height:20,width:20}
        }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})