import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useLayoutEffect} from 'react';
import Services from '../../Services/API_Services';
import ProductCard from '../../Components/ProductCard';
import StarRating from 'react-native-star-rating-widget';
import DeliveryCard from '../../Components/DeliveryCard';
import FooterButtons from '../../Components/FooterButtons';
import Recommended from '../../Components/Recommmended';
import BookingFooter from '../../Components/BookingFooter';
import ProductServices from '../Services/Products_Services';

const ProductDetails = (props: {
  navigation: {navigate: (arg0: string) => void};
  route: any;
}) => {
  const item: {
    id: string;
    image: string;
    title: string;
    price: string;
    rating: {count: number; rate: number};
    description: string;
  } = props.route.params;

  const [wishlistIcon, setwishlistIcon] = useState('❤')

  let footer = <FooterButtons navigation={props.navigation} id={item.id} />;
  if (item.id > '20') {
    footer = <BookingFooter />;
  }
  return (
    <View>
      <View style={styles.body}>
        <ScrollView>
          <FlatList
            data={[item.image]}
            horizontal={true}
            centerContent
            renderItem={({item, index}) => <ProductCard url={item} />}
          />
          <Text style={styles.prodName}>{item.title}</Text>
          <View style={styles.rating}>
            <StarRating
              starSize={25}
              rating={item.rating.rate}
              onChange={() => {}}
            />
            <Text 
            onPress={()=>{
              setwishlistIcon('🤍')
              ProductServices.addToWishlist(item.id)
            }}
            style={{fontSize: 20,color:'blue'}}>{wishlistIcon}</Text>
          </View>
          <View style={styles.rating}>
            <Text style={styles.prodName}>{item.price}/-</Text>
            <Text style={{color: 'blue'}}>Check Offers</Text>
          </View>
          <DeliveryCard />
          <Text style={styles.prodName}>Description</Text>
          <Text style={{fontSize: 18, margin: 8}}>{item.description}</Text>
          <Recommended />
        </ScrollView>
        {footer}
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    padding: 8,
  },
  prodName: {
    fontSize: 24,
    color: 'black',
    fontWeight: '400',
    marginHorizontal: 8,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 16,
    marginVertical: 8,
    alignItems: 'center',
  },
});
