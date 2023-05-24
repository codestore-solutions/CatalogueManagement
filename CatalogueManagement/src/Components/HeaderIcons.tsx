import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import API from '../CatalogueModule/Services/API_Services';
import {Avatar} from 'react-native-widgetsui'

const HeaderIcons = (props: {
  navigation: {
    navigate: (arg0: string, arg1: {id: string; title: string}) => void;
  };
}) => {
  const [data, setdata] = useState<
    {
      image: string;
      title: string;
      id: string;
    }[]
  >([]);
  useEffect(() => {
    setdata(API.getCategories());
  }, []);
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Products', {
                id: item.id,
                title: item.title,
              });
            }}>
            <View style={{paddingBottom: 15}}>
              <Avatar
                url={item.image}
                height={80}
                margin={11}
                backgroundColor="grey"
              />
              <Text style={{textAlign: 'center', color: 'black'}}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HeaderIcons;

const styles = StyleSheet.create({});
