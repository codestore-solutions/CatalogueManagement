import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductServices from '../Services/Products_Services';
import API from '../Services/API_Services';
import Filters from '../../Components/Filters';
import ProductFooter from '../../Components/ProductFooter';
import {ListTile} from 'react-native-widgetsui';
import ProductListCard from '../../Components/ProductListCard';

const ProductsList = (props: {
  navigation: {navigate: (arg0: string, arg: Object) => void};
  route: any;
}) => {
  const [data, setdata] = useState<
    {
      id: string;
      image: string;
      title: string;
      price: string;
      rating: {count: string; rate: string};
      description: string;
    }[]
  >([]);

  async function getData() {
    let res = await ProductServices.getAllProducts(props.route.params.title);
    setdata(res?.data);
  }

  const [visible, setvisible] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <View style={{height: '92%'}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ProductListCard
            item={item}
            navigation={props.navigation}
            />
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
