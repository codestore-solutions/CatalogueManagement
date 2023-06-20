import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, { useEffect, useState } from 'react';
import ProductServices from '../CatalogueModule/Services/ProductsServices';

const Recommended = () => {

  const [data, setdata] = useState<{attachment:string}[]>([]);

  async function getData() {
    let res = await ProductServices.getAllProducts('Apparels');
    setdata(res?.data.value);
  }

  useEffect(() => {
    getData();
  }, []);

  if(data == undefined){
    return null;
  }
  if(data.length == 0&& data != undefined){
    return (
      <View style={styles.body}>
        <Text style={{color: 'black'}}>Recommendations</Text>
        <FlatList
          data={Array(7)}
          horizontal
          renderItem={({item}) => <View style={styles.card}>
          </View>}
        />
      </View>
    );
  }
  else{
    return (
      <View style={styles.body}>
        <Text style={{color: 'black'}}>Recommendations</Text>
        <FlatList
          data={data}
          horizontal
          renderItem={
        ({item,index}) => 
          <View>
            <Image
            style={styles.card}
            source={{uri:item.attachment}}
            />
          </View>
          }
        />
      </View>
    );
  }
};

export default Recommended;

const styles = StyleSheet.create({
  body: {
    height: 180,
    margin: 10,
    backgroundColor: '#D9E0EC',
    borderRadius: 10,
    padding: 5,
    marginBottom: 50,
  },
  card: {
    height: 120,
    width: 110,
    backgroundColor: '#9cc0c5',
    margin: 5,
    borderRadius: 5,
    elevation:5
  },
});
