import {StyleSheet, Text, View, FlatList, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductServices from '../Services/ProductsServices';
import Filters from '../../Components/Filters';
import ProductFooter from '../../Components/ProductFooter';
import ProductListCard from '../../Components/ProductListCard';

const ProductsList = (props: {
  navigation: {navigate: (arg0: string, arg: Object) => void};
  route: any;
}) => {

  const [data, setdata] = useState([]);

  async function getData() {
    let res = await ProductServices.getAllProducts(props.route.params.id);
    setdata(res?.data.value);
  }

  const [visible, setvisible] = useState(false);
  
  useEffect(() => {
    getData();
  }, []);

  if (data.length == 0) {
    return (
      <FlatList
      data={Array(8)}
      renderItem={()=>(
        <View
        style={{
          height: 120,
          backgroundColor: '#cccec9',
          marginVertical: 5,
          marginHorizontal:10,
          borderRadius: 15,
          flexDirection:'row'
        }}>
          <View
          style={{height:100,width:100,borderRadius:5,backgroundColor:'#F1F3F6',margin:10,}}
          >

          </View>
          <View style={{width:'100%'}}>
            <View style={{height:20,width:'60%',backgroundColor:'#F1F3F6',margin:10}}></View>
            <View style={{height:20,width:'40%',backgroundColor:'#F1F3F6',margin:10}}></View>
          </View>
        </View>
      )}
      />
    );
  } else {
    return (
      <View>
        <View style={{height: '92%'}}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <ProductListCard item={item} navigation={props.navigation} />
            )}
          />
        </View>
        <View
          style={{
            height: '8%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Text style={styles.text}>Sort</Text>
          <Text onPress={() => setvisible(true)} style={styles.text}>
            Filter
          </Text>
        </View>
        <Modal visible={visible} animationType="slide">
          <View style={styles.modal}>
            <Filters action={setvisible} />
            <ProductFooter
              title1="CLOSE"
              title2="APPLY"
              action1={setvisible}
              action2={setvisible}
              arg1={false}
              arg2={false}
            />
          </View>
        </Modal>
      </View>
    );
  }
};

export default ProductsList;

const styles = StyleSheet.create({
  image: {
    height: 110,
    width: 90,
    marginRight: 20,
    margin: 8,
  },
  text: {
    fontSize: 22,
    verticalAlign: 'middle',
    marginHorizontal: 10,
  },
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});
