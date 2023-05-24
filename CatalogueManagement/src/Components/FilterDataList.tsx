import {StyleSheet, View, FlatList} from 'react-native';
import {FILTER, selectedFilters} from './Filters';
import FilterData from './FilterData';
import React, {useEffect, useState} from 'react';

type propType = {
  selectedIndex: number;
};

const FilterDataList = (props: propType) => {

  const [data, setData] = useState(FILTER[props.selectedIndex].data);
  const [state,setState] = useState([])
  useEffect(() => {
    setData(FILTER[props.selectedIndex].data);
  }, [props]);

  function toggle(item: string) {
    if (selectedFilters[FILTER[props.selectedIndex].name] != undefined) {
      const index =
        selectedFilters[FILTER[props.selectedIndex].name].indexOf(item);
      if (index > -1) {
        selectedFilters[FILTER[props.selectedIndex].name].splice(index, 1);
      } else {
        selectedFilters[FILTER[props.selectedIndex].name].push(item);
      }
    } 
    else {
      selectedFilters[FILTER[props.selectedIndex].name] = [item];
    }
    setState([])
  }

  function checkSelected(item: string) {
    if (selectedFilters[FILTER[props.selectedIndex].name] == undefined) {
      return false;
    } else {
      return selectedFilters[FILTER[props.selectedIndex].name].includes(item)
    }
  }

  return (
    <View style={styles.filtersData}>
      <FlatList
        data={data}
        extraData={state}
        renderItem={({item, index}) => (
          <FilterData
            name={item}
            type={props.selectedIndex}
            index={index}
            toggle={toggle}
            selected={checkSelected(item)}
          />
        )}
      />
    </View>
  );
};

export default FilterDataList;

const styles = StyleSheet.create({
  filtersData: {},
});
