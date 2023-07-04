import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import EditIcon from './EditIcon';
import DeleteIcon from './DeleteIcon';
import WishlistDialogBox from './WishlistDialogBox';

const WishlistTag = (props: {
  title: string;
  id: number;
  state: (arg0: boolean) => void;
  navigation: {navigate: (arg0: string, arg1: {}[]) => void};
  items:{productId:number}[]
}) => {
  const [show, setshow] = useState(false);

  let renderComp = (
    <WishlistDialogBox
      title="Edit Wishlist"
      setVisible={setshow}
      name={props.title}
      wishId={props.id}
      state={props.state}
    />
  );

  async function modalDelete() {
    setshow(!show);
  }

  async function modalEdit() {
    setshow(!show);
  }
  return (
    <View>
      <TouchableOpacity
        style={styles.body}
        onPress={() => {
          props.navigation.navigate('WishlistProducts', props.items);
        }}>
        <Text style={styles.text}>{props.title}</Text>
        <View style={styles.iconBox}>
          <TouchableOpacity
            style={styles.edit}
            onPress={() => {
              modalEdit();
            }}>
            <EditIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <DeleteIcon />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <Modal visible={show} transparent={true}>
        <View style={styles.modal}>{renderComp}</View>
      </Modal>
    </View>
  );
};

export default WishlistTag;

const styles = StyleSheet.create({
  body: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: '#F9F9F9',
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    margin: 8,
  },
  iconBox: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  edit: {
    marginRight: 10,
  },
  modal: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
