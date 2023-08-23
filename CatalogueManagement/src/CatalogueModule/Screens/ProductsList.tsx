import {StyleSheet, Text, View, FlatList, Modal, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductServices from '../Services/ProductsServices';
import Filters from '../../Components/Filters';
import ProductFooter from '../../Components/ProductFooter';
import ProductListCard from '../../Components/ProductListCard';
import AddToWishlist from '../../Components/AddToWishlist';
import Highlight from '../../Components/Highlight';
import Slider from '../../Components/Slider';
import StarRating from '../../FeedbackManagement/Components/StarRating';
import Sort from '../../Components/Sort';
import {COLORS} from '../../Constants/colors';

const ProductsList = (props: {
  navigation: {navigate: (arg0: string, arg: Object) => void};
  route: any;
}) => {
  const [data, setdata] = useState<
    {
      id: string | number;
      attachment: string;
      name: string;
      price: string;
      rating: number;
    }[]
  >([]);

  async function getData() {
    let res = await ProductServices.getAllProducts(props.route.params.id);
    setdata(res?.data.value);
  }

  const [showWishlist, setshowWishlist] = useState(false);
  async function AddtoWishlist(prodID: number) {}
  const [visible, setvisible] = useState(false);
  const [sort, setsort] = useState(false);
  const [Selected, setSelected] = useState(-1);

  function sortPriceLtoH() {
    let sorted = data.sort((a, b) => {
      return Number(a.price) - Number(b.price);
    });
    setdata(sorted);
    setsort(!sort);
  }

  function sortPriceHtoL() {
    let sorted = data.sort((a, b) => {
      return Number(b.price) - Number(a.price);
    });
    setdata(sorted);
    setsort(!sort);
  }

  useEffect(() => {
    getData();
  }, []);

  if (data.length == 0) {
    return (
      <FlatList
        data={Array(8)}
        renderItem={() => (
          <View
            style={{
              height: 120,
              backgroundColor: '#cccec9',
              marginVertical: 5,
              marginHorizontal: 10,
              borderRadius: 15,
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 5,
                backgroundColor: '#F1F3F6',
                margin: 10,
              }}></View>
            <View style={{width: '100%'}}>
              <View
                style={{
                  height: 20,
                  width: '60%',
                  backgroundColor: '#F1F3F6',
                  margin: 10,
                }}></View>
              <View
                style={{
                  height: 20,
                  width: '40%',
                  backgroundColor: '#F1F3F6',
                  margin: 10,
                }}></View>
            </View>
          </View>
        )}
      />
    );
  } else {
    return (
      <View style={{backgroundColor: COLORS.BackgroundColor}}>
        <View style={{height: '92%'}}>
          <FlatList
            data={data}
            renderItem={({item, index}) => (
              <ProductListCard
                item={item}
                index={index}
                navigation={props.navigation}
                onLike={() => {
                  setSelected(Number(item.id));
                  setshowWishlist(true);
                }}
                liked={false}
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
          <Text
            onPress={() => {
              setsort(!sort);
            }}
            style={styles.text}>
            Sort
          </Text>
          <Text onPress={() => setvisible(true)} style={styles.text}>
            Filter
          </Text>
        </View>
        <Modal visible={visible} animationType="slide" transparent={true}>
          <View style={styles.modal}>
            <View style={styles.filter}>
              <View style={styles.filterHeader}>
                <Text style={styles.heading}>Filter</Text>
                <Text
                  onPress={() => {
                    setvisible(!visible);
                  }}
                  style={styles.clear}>
                  Clear All
                </Text>
              </View>
              <Text style={styles.brand}>Search Brand</Text>
              <TextInput
                placeholder="Enter brand name"
                style={styles.brandInput}
              />
              <Text style={styles.brand}>Category</Text>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Highlight title="All" selected={true} />
                <Highlight title="Headphone" selected={false} />
                <Highlight title="Mobile Phone" selected={false} />
                <Highlight title="Speakers" selected={false} />
              </View>
              <Text style={styles.brand}>Price</Text>
              <Slider />
              <Text style={styles.brand}>Rating</Text>
              <View style={{marginTop: 20}}>
                <StarRating selected={5} onSelect={() => {}} />
                <View style={styles.buttonBox}></View>
              </View>
            </View>
          </View>
        </Modal>
        <Sort
          visible={sort}
          setvisible={setsort}
          lowtohigh={sortPriceLtoH}
          hightolow={sortPriceHtoL}
        />
        <AddToWishlist
          visible={showWishlist}
          setVisible={setshowWishlist}
          prodId={Selected}
          price={300}
        />
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
  },
  filter: {
    height: '60%',
    backgroundColor: 'white',
    marginTop: '80%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    bottom: 0,
    padding: 20,
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 1)',
  },
  clear: {
    color: 'rgba(241, 65, 108, 1)',
    fontSize: 18,
    fontWeight: '400',
  },
  brand: {
    fontSize: 18,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 1)',
    marginTop: 20,
  },
  brandInput: {
    borderColor: 'rgba(204, 204, 204, 1)',
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  buttonBox: {},
});
