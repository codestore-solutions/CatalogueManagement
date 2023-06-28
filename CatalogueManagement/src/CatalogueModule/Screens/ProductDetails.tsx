import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect, useLayoutEffect} from 'react';
import FooterButtons from '../../Components/FooterButtons';
import Recommended from '../../Components/Recommmended';
import ProductServices from '../Services/ProductsServices';
import ProductCarousel from '../../Components/ProductCarousel';
import Divider from '../../Components/Divider';

const ProductDetails = (props: {
  navigation: {navigate: (arg0: string) => void};
  route: {params: string | number};
}) => {
  //create type
  const [data, setdata] = useState<{
    name: string;
    id: number;
    rating: number;
    varients: {
      id: number;
      productId: 0;
      description: string;
      isActive: boolean;
      price: number;
      availableStock: number;
      attachment: string[];
    }[];
  }>(Object);

  async function getData() {
    const res = await ProductServices.getProduct(props.route.params);
    setdata(res?.data);
  }

  useEffect(() => {
    getData();
  }, []);

  if (Object.keys(data).length == 0) {
    return (
      <View>
        <ActivityIndicator></ActivityIndicator>
      </View>
    );
  } else {
    return (
      <View>
        <View style={styles.body}>
          <ScrollView
          showsVerticalScrollIndicator={false}
          >
            <ProductCarousel Attachment={data.varients[0].attachment} rating={data.rating}/>
            <Text style={styles.prodName}>{data.name}</Text>
            <View style={styles.rating}>
              <Text style={{margin: 5}}>
                MRP{'  '}
                <Text
                  style={[
                    styles.prodName,
                    {textDecorationLine: 'line-through', marginHorizontal: 10,color:'#999999'},
                  ]}>
                  
                  ₹{data.varients[0].price + 500}/-
                </Text>
                <Text style={styles.prodName}> ₹{data.varients[0].price}/-</Text>
              </Text>
              <Text style={{color: 'blue'}}>(20% OFF)</Text>
            </View>
            <Divider width={'96%'} />
            <Text style={{margin: 10}}>
              Selected Varient -{' '}
              <Text style={{color: 'black', fontWeight: '500'}}>{}</Text>
            </Text>
            <View style={styles.varient}>
              <Image
                style={{height: 100, width: 100, resizeMode: 'contain'}}
                source={{uri: data.varients[0].attachment[0]}}
              />
              <Text>Charcoal</Text>
              <Text>{data.varients[0].price}</Text>
            </View>
            <Divider width={'96%'} />
            <Text style={styles.prodName}>Bank Offers</Text>
            <Text style={{marginHorizontal: 8}}>
              Up To Rs 500 cashback on CRED pay transaction - Min spend Rs
              1,000. Available only on Android Device
            </Text>
            <Text style={styles.prodName}>EMI Options</Text>
            <Text style={{marginHorizontal: 8}}>
              EMI starting form ₹70/month
            </Text>
            <Text style={{fontSize: 18, margin: 8}}>
              {data.varients[0].description}
            </Text>
            <View style={{height: 120}}></View>
            {/* <Recommended /> */}
          </ScrollView>
          <FooterButtons
            navigation={props.navigation}
            id={data.id}
            vid={data.varients[0].id}
            qty={1}
            price={data.varients[0].price}
          />
        </View>
      </View>
    );
  }
};

export default ProductDetails;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    height: '100%',
  },
  prodName: {
    fontSize: 20,
    color: 'black',
    fontWeight: '400',
    margin: 8,
    fontFamily:'Poppins'
  },
  rating: {
    flexDirection: 'row',
    marginRight: 16,
    marginVertical: 8,
    alignItems: 'center',
  },
  varient: {
    width: 103,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 20,
  },
});
