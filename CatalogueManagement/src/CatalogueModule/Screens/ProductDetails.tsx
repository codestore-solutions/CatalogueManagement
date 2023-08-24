import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect, useLayoutEffect} from 'react';
import FooterButtons from '../../Components/FooterButtons';
import Recommended from '../../Components/Recommmended';
import ProductServices from '../Services/ProductsServices';
import ProductCarousel from '../../Components/ProductCarousel';
import Divider from '../../Components/Divider';
import Varient from '../../Components/Varient';
import {useNavigation, useRoute} from '@react-navigation/native';
import LikeIcon from '../../Components/LikeIcon';
import {COLORS} from '../../Constants/colors';
import BackArrowIcon from '../../Components/SvgIcons/BackArrow';

const ProductDetails = () => {
  const navigation = useNavigation();
  const route: any = useRoute();
  //create type
  const [data, setData] = useState<{
    name: string;
    id: number;
    rating: number;
    vendorId: number;
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
    const res = await ProductServices.getProduct(route.params.id);
    setData(res?.data);
    console.log(res?.data);
  }

  const [selectedVariant, setSelectedVariant] = useState(0);

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
        <StatusBar
          backgroundColor={'transparent'}
          translucent
          barStyle="dark-content"
        />
        <View style={styles.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                position: 'absolute',
                top: StatusBar.currentHeight
                  ? StatusBar.currentHeight + 20
                  : 40,
                height: 50,
                width: '100%',
                flexDirection: 'row',
                paddingEnd: '4%',
                paddingStart: '2%',
                justifyContent: 'space-between',
                zIndex: 99,
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                }}
                onPress={() => navigation.goBack()}>
                <BackArrowIcon />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.Light,
                  elevation: 3,
                  alignItems: 'center',
                  justifyContent: 'center',
                  aspectRatio: 1,
                  borderRadius: 100,
                }}>
                <LikeIcon />
              </TouchableOpacity>
            </View>
            <ProductCarousel
              Attachment={data.varients[selectedVariant].attachment}
              rating={4}
            />

            <Text style={styles.prodName}>{data.name}</Text>
            <View style={styles.rating}>
              <Text style={{margin: 5}}>
                MRP{'  '}
                <Text
                  style={[
                    styles.prodName,
                    {
                      textDecorationLine: 'line-through',
                      marginHorizontal: 10,
                      color: '#999999',
                    },
                  ]}>
                  ₹{data.varients[selectedVariant].price + 500}/-
                </Text>
                <Text style={styles.prodName}>
                  {' '}
                  ₹{data.varients[selectedVariant].price}/-
                </Text>
              </Text>
              <Text style={{color: 'blue'}}>(20% OFF)</Text>
            </View>
            <Divider width={'96%'} />
            <Text style={{margin: 10}}>
              Selected Varient -{' '}
              <Text style={{color: 'black', fontWeight: '500'}}>{}</Text>
            </Text>
            {/* <View style={styles.varient}>
              <Image
                style={{height: 100, width: 100, resizeMode: 'contain'}}
                source={{uri: data.varients[0].attachment[0]}}
              />
              <Text>Charcoal</Text>
              <Text>{data.varients[0].price}</Text>
            </View> */}
            <FlatList
              data={data.varients}
              horizontal
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedVariant(index);
                  }}>
                  <Varient
                    image={data.varients[index].attachment[0]}
                    title={data.name}
                    price={data.varients[index].price}
                    selected={index === selectedVariant}
                  />
                </TouchableOpacity>
              )}
            />
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
              {data.varients[selectedVariant].description}
            </Text>
            <View style={{height: 120}}></View>
            {/* <Recommended /> */}
          </ScrollView>
          <FooterButtons
            vendorId={data.vendorId}
            navigation={navigation}
            id={data.id}
            vid={data.varients[selectedVariant].id}
            qty={1}
            price={data.varients[selectedVariant].price}
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
    height: '100%',
  },
  prodName: {
    fontSize: 20,
    color: 'black',
    fontWeight: '400',
    margin: 8,
    fontFamily: 'Poppins',
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
