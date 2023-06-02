import {FlatList, ScrollView, StyleSheet, Text, View,Image} from 'react-native';
import React, {useState, useEffect, useLayoutEffect} from 'react';
import Services from '../../Services/API_Services';
import ProductCard from '../../Components/ProductCard';
import StarRating from 'react-native-star-rating-widget';
import DeliveryCard from '../../Components/DeliveryCard';
import FooterButtons from '../../Components/FooterButtons';
import Recommended from '../../Components/Recommmended';
import BookingFooter from '../../Components/BookingFooter';
import ProductServices from '../Services/ProductsServices';
import API from '../Services/API_Services';
import ProductCarousel from '../../Components/ProductCarousel';
import Divider from '../../Components/Divider';

const ProductDetails = (props: {
  navigation: {navigate: (arg0: string) => void};
  route: any;
}) => {

  const data = API.getProductDetails('');

  const [wishlistIcon, setwishlistIcon] = useState('❤')

  
 
  return (
    <View>
      <View style={styles.body}>
        <ScrollView>
          <ProductCarousel Attachment={data.Attachment}/>
          <Text style={styles.prodName}>{data.Name}</Text>
          <View style={styles.rating}>
            <Text style={{margin:5}}>
              MRP 
            <Text style={styles.prodName}>  {data.Varients[0].price}/-</Text></Text>
            <Text style={{color: 'blue'}}>(20% OFF)</Text>
          </View>
          <Divider width={'96%'}/>
          <Text style={{margin:10}}>Select Color - <Text style={{color:'black',fontWeight:'500'}}>Dark Black</Text></Text>
          <View style={styles.varient}>
            <Image
            style={{height:100,width:100}}
            source={{uri:data.Attachment[0]}}
            />
            <Text>
              Charcoal
            </Text>
            <Text>
              {data.Varients[0].price}
            </Text>
          </View>
          <Divider width={'96%'}/>
          <Text style={styles.prodName}>Bank Offers</Text>
          <Text style={{fontSize: 18, margin: 8}}>{data.Varients[0].description}</Text>
          <Recommended />
        </ScrollView>
        <FooterButtons navigation={props.navigation} id=''/>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
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
  varient:{
    width:103,
    alignItems:'center',
    borderWidth:1,
    borderRadius:5,
    marginHorizontal:10,
    marginBottom:20
  }
});
