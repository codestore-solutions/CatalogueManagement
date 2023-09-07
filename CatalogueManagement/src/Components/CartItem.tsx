import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Svg, {Path} from 'react-native-svg';
import QuantityCounter from './QuantityCounter';
import {COLORS} from '../Constants/colors';

const CartItem = (props: {
  data: any;
  index?: number;
  setQty: Function;
  qty: number;
  remove?: Function;
  variantId: number;
}) => {
  const [variantData, setVariantData] = useState({price: '', name: ''});

  useEffect(() => {
    const filteredData = props.data.varients.filter(
      (item: any) => item.id == props.variantId,
    );
    setVariantData(filteredData[0]);
  }, []);
  return (
    <View style={styles.card}>
      <View style={styles.image}>
        <Image
          style={{height: '100%', width: '100%'}}
          resizeMode="contain"
          // source={{uri: props.data.varients[0].attachment[0]}}
          source={require('../Assets/Images/sampleProductImage.png')}
        />
      </View>
      <View style={{flexShrink: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: 'black',
              width: '70%',
            }}>
            {variantData.name}
          </Text>
          {/* Dustbin Icon */}
          {props.remove && (
            <TouchableOpacity
              onPress={() => {
                props.remove && props.remove(props.data.id);
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 20,
              }}>
              <Svg
                width={22}
                height={22}
                viewBox="0 0 19 19"
                fill="none"
                {...props}>
                <Path
                  d="M2.375 4.75h14.25M6.333 4.75V3.167a1.583 1.583 0 011.584-1.584h3.166a1.583 1.583 0 011.584 1.584V4.75m2.375 0v11.083a1.583 1.583 0 01-1.584 1.584H5.542a1.583 1.583 0 01-1.584-1.584V4.75h11.084zM7.917 8.708v4.75M11.083 8.708v4.75"
                  stroke="#999"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 1,
          }}>
          <View style={styles.varientCard}>
            <Text style={{fontSize: 13}}>Color : </Text>
            <Text style={{color: 'black', fontWeight: '500', fontSize: 13}}>
              Charcoal
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, marginLeft: 10, color: 'black'}}>
              Qty.{' '}
            </Text>
            <QuantityCounter quantity={props.qty} setQuant={props.setQty} />
            <View>
              {/* <Text style={{fontSize: 20, marginLeft: 10}}>
                  {props.quantity}
                </Text> */}
            </View>
          </View>
        </View>
        <Text style={{fontSize: 20, color: '#000', alignItems: 'center'}}>
          ₹{variantData.price}/-{'  '}
          <Text
            style={{
              fontSize: 18,
              color: COLORS.TextLight,
              marginLeft: 10,
              textDecorationLine: 'line-through',
            }}>
            ₹2,144
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.PrimaryColor,
              marginLeft: 10,
            }}>
            {'   '}(47% OFF)
          </Text>
        </Text>

        <Text style={{marginTop: 5}}>
          <Text style={{color: 'black'}}>10 Days</Text> return available
        </Text>
        <Text style={{marginTop: 5}}>
          Delivery by <Text style={{color: 'black'}}>15 May 2023</Text>
        </Text>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  varientCard: {
    backgroundColor: '#F1F3F6',
    flexDirection: 'row',
    marginVertical: 5,
    padding: 5,
    borderRadius: 5,
  },
  card: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 20,
    marginRight: 20,
    backgroundColor: COLORS.Grey,
    borderWidth: 1,
    borderColor: COLORS.BorderColor,
    padding: 10,
  },
  header: {
    fontSize: 18,
    margin: 2,
  },
  quantity: {
    width: 90,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 20,
    elevation: 5,
    backgroundColor: 'white',
    marginTop: 4,
    marginLeft: 5,
  },
  bin: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 8,
  },
});
