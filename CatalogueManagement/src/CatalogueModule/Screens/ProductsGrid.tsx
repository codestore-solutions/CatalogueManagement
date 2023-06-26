import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductServices from '../Services/ProductsServices';
import GridCard from '../../Components/GridCard';

const ProductsGrid = (props: {
  navigation: {navigate: (arg0: string, arg1: string | number) => void};
}) => {
  const [data, setdata] = useState<
    {
      id: string | number;
      attachment: string;
      name: string;
      price: string;
      rating: number;
    }[]
  >([]);

  async function getData() {
    let res = await ProductServices.getAllProducts(1);
    setdata(res?.data.value);
  }

  const [visible, setvisible] = useState(false);

  useEffect(() => {
    console.log('Product Grid Loaded::');
    
    getData();
  }, []);

  if (data.length == 0) {
    return <View style={styles.body}>
      {/* <FlatList
      data={Array(12)}
      numColumns={2}
      renderItem={()=>
      <GridCard
      url={''}
      title=''
      price={''}
      rating={0}
      likeEnabled={false}
      liked={false}
      onPress={()=>{}}
      />
      }
      /> */}
    </View>;
  } else {
    return (
      <View style={styles.body}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({item}) => (
            <GridCard
              url={item.attachment}
              title={item.name}
              rating={item.rating == undefined ? 4 : item.rating}
              price={item.price}
              likeEnabled={true}
              liked={false}
              onPress={() => {
                props.navigation.navigate('Product', item.id);
              }}
            />
          )}
        />
      </View>
    );
  }
};

export default ProductsGrid;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    height: '100%',
    justifyContent:'center',
    alignItems:'center'
  },
});
