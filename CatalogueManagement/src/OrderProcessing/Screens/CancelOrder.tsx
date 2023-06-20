import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import API from '../../Services/API_Services';
import Divider from '../../Components/Divider';
import Svg, {Path} from 'react-native-svg';

let data = API.getProductDetails('');

const CancelOrder = (props: any) => {
  const [visible, setvisible] = useState(false);
  const [bottomSheet, setbottomSheet] = useState(false);

  return (
    <View style={styles.body}>
      <View style={{flexDirection: 'row', marginVertical: 20}}>
        <Image
          source={{uri: data.Attachment[0]}}
          style={{height: 100, width: 100}}
        />
        <View style={{width: '65%'}}>
          <Text
            numberOfLines={2}
            style={{fontSize: 18, color: 'black', marginBottom: 10}}>
            {data.Name}
          </Text>
          <Text style={{fontSize: 18, color: '#34A893'}}>
            ₹52,099.00 (1 item)
          </Text>
          <Text>Qty: 1</Text>
        </View>
      </View>
      <Divider width={'100%'} />
      <TouchableOpacity style={styles.box} onPress={() => setvisible(!visible)}>
        <Text style={{fontSize: 16}}>
          Select a reason for cancellation (Optional)
        </Text>
        <Svg
          width={14}
          height={8}
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <Path
            d="M13 1L7 7 1 1"
            stroke="#000"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </TouchableOpacity>
      <List visible={visible} set={setvisible} />
      <TouchableOpacity
        style={styles.footer}
        onPress={() => setbottomSheet(true)}>
        <Text style={{color: 'white'}}>Cancel Order</Text>
      </TouchableOpacity>
      <Modal transparent visible={bottomSheet} animationType="slide">
        <TouchableOpacity
          onPress={() => {
            setbottomSheet(false);
          }}
          style={{
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View style={styles.bottom}>
            <Text
              style={{
                fontSize: 22,
                color: 'black',
                fontWeight: '500',
              }}>
              Order Canceled Successfully
            </Text>
              <Text>Your order has been successfully canceled</Text>
            <TouchableOpacity
              style={styles.footer}
              onPress={() => {
                setbottomSheet(false);
                props.navigation.navigate('Home')
              }}>
              <Text style={{color: 'white'}}>Go to Homepage</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

function List(props: {
  visible: boolean;
  set: (arg0: boolean) => void;
}): JSX.Element {
  if (props.visible) {
    return (
      <View
        style={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          backgroundColor: 'white',
          elevation: 10,
          marginHorizontal: 10,
          padding: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            props.set(false);
          }}>
          <Text style={{fontSize: 16, marginVertical: 10}}>
            Order created by mistake
          </Text>
          <Divider width={'100%'} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.set(false);
          }}>
          <Text style={{fontSize: 16, marginVertical: 10}}>
            Item would not arrive on tim
          </Text>
          <Divider width={'100%'} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.set(false);
          }}>
          <Text style={{fontSize: 16, marginVertical: 10}}>
            Shipping Cost too high
          </Text>
          <Divider width={'100%'} />
        </TouchableOpacity>
      </View>
    );
  } else {
    return <View></View>;
  }
}
export default CancelOrder;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    height: '100%',
  },
  box: {
    width: '95%',
    backgroundColor: '#F1F3F6',
    height: 53,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  footer: {
    width: '96%',
    height: 50,
    backgroundColor: '#7E72FF',
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    height: '40%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems:'center',
    justifyContent:'center'
  },
});
