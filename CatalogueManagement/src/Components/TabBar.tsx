import {View, Text, TouchableOpacity} from 'react-native';

type propType = {
  state: {routes: {key: string | number; name: any}[]; index: any};
  descriptors: {[x: string]: {options: any}};
  navigation:
    | {
        emit: (arg0: {
          type: string;
          target: string | number;
          canPreventDefault?: boolean;
        }) => any;
        navigate: (arg0: {name: any; merge: boolean}) => void;
      }
    | any;
};

function MyTabBar(props: propType) {
  return (
    <View
    key={props.state.routes[0].key}
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        height: '8%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        elevation: 5,
      }}>
      {props.state.routes.map(
        (route: {key: string | number; name: any}, index: any) => {
          const {options} = props.descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

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
            style={{alignItems:'center',justifyContent:'center'}}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              <Text style={{color: isFocused ? '#673ab7' : '#222',textAlignVertical:'center'}}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
}



export default MyTabBar;
