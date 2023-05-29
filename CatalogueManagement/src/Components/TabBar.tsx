import {View, Text, TouchableOpacity} from 'react-native';

type propType = {
    state: {routes: {key: string | number; name: any}[]; index: any};
    descriptors: {[x: string]: {options: any}};
    navigation: {
      emit: (arg0: {
        type: string;
        target: string | number;
        canPreventDefault?: boolean;
      }) => any;
      navigate: (arg0: {name: any; merge: boolean}) => void;
    }|any;
  }

function MyTabBar(props: propType) {
  return (
    <View style={{height:'8%',justifyContent:'center',backgroundColor:'white',borderTopLeftRadius:30,borderTopRightRadius:30,position:'absolute',bottom:0,width:'100%',elevation:5}}>
        <View style={{flexDirection: 'row',backgroundColor:'white',justifyContent:'space-evenly'}}>
      {props.state.routes.map(
        (route: {key: string | number; name: any}, index: any) => {
          const {options} = props.descriptors[route.key];
          const label =
            options.tabBarIcon 

          const isFocused = props.state.index === index;

          const onPress = () => {
            const event = props.navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              props.navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            props.navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              <View style={{height:10,width:10,backgroundColor:'red'}}>
                {label}
              </View>
            </TouchableOpacity>
          );
        },
      )}
    </View>
    </View>
  );
}

export default MyTabBar;