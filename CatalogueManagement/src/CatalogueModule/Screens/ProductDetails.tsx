import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator
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
    }[];
    attachments: {
      id: number;
      productId: number;
      isUploadedByAdmin: boolean;
      reviewId: number;
      attachmentURL: string;
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
   return  ( <View><ActivityIndicator></ActivityIndicator></View>)
  } 
  else {
    return (
      <View>
        <View style={styles.body}>
          <ScrollView>
            <ProductCarousel Attachment={[data.attachments[0].attachmentURL]} />
            <Text style={styles.prodName}>{data.name}</Text>
            <View style={styles.rating}>
              <Text style={{margin: 5}}>
                MRP
                <Text style={styles.prodName}> {data.varients[0].price}/-</Text>
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
                style={{height: 100, width: 100}}
                source={{uri: data.attachments[0].attachmentURL}}
              />
              <Text>Charcoal</Text>
              <Text>{data.varients[0].price}</Text>
            </View>
            <Divider width={'96%'} />
            <Text style={styles.prodName}>Bank Offers</Text>
            <Text style={{fontSize: 18, margin: 8}}>
              {data.varients[0].description}
            </Text>
            <Recommended />
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
