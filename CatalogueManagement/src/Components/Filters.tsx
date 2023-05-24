import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import FilterTag from './FilterTag';
import FilterDataList from './FilterDataList';

const Filters = (props: {action: (arg0: boolean) => void}) => {
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.body}>
      <View style={styles.filters}>
        <FlatList
          data={FILTER}
          renderItem={({item, index}) => (
            <FilterTag name={item.name} index={index} action={setSelected} />
          )}
        />
      </View>
      <View style={styles.filterObj}>
        <View style={styles.header}>
          <Text style={styles.heading}>{FILTER[selected].name}</Text>
          <Text
            style={styles.clear}
            onPress={() => {
              selectedFilters = {};
              props.action(false);
            }}>
            Clear All
          </Text>
        </View>
        <FilterDataList selectedIndex={selected} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    height: '92%',
  },
  filters: {
    backgroundColor: '#ebf4db',
    width: '30%',
  },
  filtersData: {
    flex: 1,
    alignItems: 'center',
  },
  filterObj: {
    width: '90%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
  },
  heading: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
  },
  clear: {
    color: 'blue',
  },
});

export let FILTER: {name: string; data: string[]}[] = [
  {
    name: 'Size',
    data: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
  },
  {
    name: 'Color',
    data: ['Red', 'Blue', 'Orange', 'Green'],
  },
  {
    name: 'Brand',
    data: ['Zara', 'ABYS', 'Adidas', 'Nike', 'Puma', 'Ck', 'Campus'],
  },
  {
    name: 'Categories',
    data: [
      'Tshirts',
      'Shirts',
      'Trousers',
      'Denims',
      'Shorts',
      'Boxers',
      'Footwear',
    ],
  },
  {
    name: 'Country of Origin',
    data: ['All Countries', 'India'],
  },
  {
    name: 'Discount',
    data: ['20% and above', '40% and above', '60% and above'],
  },
  {
    name: 'Delivery Time',
    data: ['within 4 days'],
  },
];

export let selectedFilters: {[key: string]: string[]} = {};

export default Filters;
