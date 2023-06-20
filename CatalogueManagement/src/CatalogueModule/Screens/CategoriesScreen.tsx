import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductServices from '../Services/ProductsServices';

const CategoriesScreen = (props: { navigation: { navigate: (arg0: string, arg1: { id: any; title: any; }) => void; }; }) => {
  const [categories, setcategories] = useState([]);

  let colors = [
    '#2c7ef2',
    '#ff5048',
    '#fa0269',
    '#ac1820',
    '#454f83',
    '#ea7250',
    '#ff3856',
  ];

  async function getCategories() {
    let res = await ProductServices.getCategories();
    setcategories(res?.data.value);
  }
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={styles.body}>
      <View>
        <FlatList
          style={{alignSelf: 'center'}}
          data={categories}
          numColumns={2}
          renderItem={({item, index}) => (
            <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Products', {
                id: item.id,
                title: item.name,
              });
            }}
              style={{
                height: 160,
                width: 160,
                backgroundColor: colors[index],
                borderRadius: 20,
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, color: 'white'}}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({body: {padding: 15}});
