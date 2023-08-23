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
import {Avatar} from 'react-native-widgetsui';
import ProductServices from '../CatalogueModule/Services/ProductsServices';
import {COLORS} from '../Constants/colors';

const HeaderIcons = (props: {
  navigation: {
    navigate: (arg0: string, arg1: {id: string; title: string}) => void;
  };
}) => {
  const [categories, setcategories] = useState([]);

  async function getCategories() {
    let res = await ProductServices.getCategories();
    setcategories(res?.data.value);
  }

  const [data, setdata] = useState<
    {
      image: string;
      title: string;
      id: string;
    }[]
  >([]);
  useEffect(() => {
    getCategories();
    setdata(API.getCategories());
  }, []);
  return (
    <View>
      <FlatList
        data={categories?.splice(0, 4)}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Products', {
                id: item.id,
                title: item.name,
              });
            }}>
            <View style={{paddingBottom: 15}}>
              {/* <Avatar
                url={data[index].image}
                height={80}
                margin={11}
                backgroundColor="grey"
              /> */}
              <Image
                source={{uri: data[index].image}}
                resizeMode="cover"
                style={[styles.image, {borderWidth: index == 0 ? 1 : 0}]}
              />
              <Text
                numberOfLines={1}
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  maxWidth: 80,
                  alignSelf: 'center',
                  fontWeight: '600',
                  color: index == 0 ? COLORS.PrimaryColor : 'black',
                }}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HeaderIcons;

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    borderRadius: 80,
    margin: 11,
    backgroundColor: 'grey',
    borderColor: COLORS.PrimaryColor,
  },
});
