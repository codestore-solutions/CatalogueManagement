import React, {useEffect, useRef, useState} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
import {COLORS} from '../../Constants/colors';
import AddressBox from '../ReusableComponent/AddressBox';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../ReusableComponent/CustomTextInput';
import Divider from '../Divider';
import RadioActive from '../SvgIcons/RadioActive';
import CustomPhoneInput from '../ReusableComponent/CustomPhoneInput';
import {theme} from '../../Constants/theme';
import {
  validateAddress,
  validateCity,
  validateLocality,
  validateMobile,
  validateName,
  validatePinCode,
  validateState,
} from '../../utils/validators';

function EditAddressModal({show, setShow}: {show: boolean; setShow: Function}) {
  const navigation: any = useNavigation();
  const [pinCodeError, setPinCodeError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [localityError, setLocalityError] = useState('');
  const [cityError, setCityError] = useState('');
  const [nameError, setNameError] = useState('');
  const [stateError, setStateError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [address, setAddress] = useState('');
  const [locality, setLocality] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const mobileRef: any = useRef(null);

  useEffect(() => {
    //cleanup after closing modal
    if (show) {
      setMobile('');
      setName('');
      setCity('');
      setState('');
      setAddress('');
      setLocality('');
      setPinCode('');
      setMobileError('');
      setNameError('');
      setCityError('');
      setStateError('');
      setAddressError('');
      setLocalityError('');
      setPinCodeError('');
    }
  }, [show]);

  const checkValidation = () => {
    let isPinCodeValid = validatePinCode(pinCode, setPinCodeError);
    let isAddressValid = validateAddress(address, setAddressError);
    let isLocalityValid = validateLocality(locality, setLocalityError);
    let isCityValid = validateCity(city, setCityError);
    let isStateValid = validateState(state, setStateError);
    let isNameValid = validateName(name, setNameError);
    let isMobileValid = validateMobile(mobile, mobileRef, setMobileError);

    if (
      isPinCodeValid &&
      isAddressValid &&
      isCityValid &&
      isLocalityValid &&
      isStateValid &&
      isNameValid &&
      isMobileValid
    )
      return true;
    else false;
  };

  const handleSubmit = () => {
    if (checkValidation()) {
      setShow(false);
    }
  };

  return (
    <Modal transparent visible={show} animationType="slide">
      <StatusBar backgroundColor={'rgba(0, 0, 0, 0.5)'} />
      <View
        style={{
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <TouchableOpacity onPress={() => setShow(false)} style={{flex: 1}} />
        <View
          style={{
            backgroundColor: COLORS.Light,
            position: 'absolute',
            bottom: 0,
            width: '100%',
            paddingTop: 30,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            zIndex: 9,
            height: '90%',
          }}>
          <ScrollView contentContainerStyle={{paddingHorizontal: '4%'}}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: '600',
                }}>
                Address
              </Text>
            </View>
            <View style={{gap: 15, marginVertical: 20}}>
              <CustomTextInput
                value={pinCode}
                setValue={setPinCode}
                placeholder="Pin Code*"
                error={pinCodeError}
                setError={setPinCodeError}
                type="number-pad"
              />
              <CustomTextInput
                value={address}
                setValue={setAddress}
                placeholder="Address (House No. Building, Street, Area)*"
                error={addressError}
                setError={setAddressError}
              />
              <CustomTextInput
                value={locality}
                setValue={setLocality}
                placeholder="Locality / Town*"
                error={localityError}
                setError={setLocalityError}
              />
              <View style={{flexDirection: 'row', gap: 15}}>
                <View style={{flex: 1}}>
                  <CustomTextInput
                    value={city}
                    setValue={setCity}
                    placeholder="City"
                    error={cityError}
                    setError={setCityError}
                  />
                </View>
                <View style={{flex: 1}}>
                  <CustomTextInput
                    value={state}
                    setValue={setState}
                    placeholder="State"
                    error={stateError}
                    setError={setStateError}
                  />
                </View>
              </View>
            </View>
            <Divider width={'100%'} />
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 15,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: '600',
                }}>
                Contact Details
              </Text>
            </View>
            <View style={{gap: 15, marginVertical: 20}}>
              <CustomTextInput
                value={name}
                setValue={setName}
                placeholder="Name*"
                error={nameError}
                setError={setNameError}
              />
              <CustomPhoneInput
                value={mobile}
                setValue={setMobile}
                placeholder="Mobile No.*"
                error={mobileError}
                setError={setMobileError}
                inputRef={mobileRef}
              />
            </View>
            <Divider width={'100%'} />
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: '600',
                }}>
                Save address As
              </Text>
            </View>
            <View style={{gap: 10, marginVertical: 20, flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={{
                    borderWidth: 3,
                    borderColor: COLORS.Light,
                    padding: 5,
                    paddingHorizontal: 20,
                    backgroundColor: COLORS.PrimaryColor,
                    elevation: 3,
                    borderRadius: 10,
                    color: COLORS.Light,
                    fontSize: 16,
                    textAlignVertical: 'center',
                  }}>
                  Home
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: COLORS.BorderColor,
                    padding: 5 + 2,
                    paddingHorizontal: 20,
                    backgroundColor: '#fff',
                    elevation: 0,
                    borderRadius: 10,
                    color: '#000',
                    fontSize: 16,
                    textAlignVertical: 'center',
                  }}>
                  Office
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: COLORS.BorderColor,
                    padding: 5 + 2,
                    paddingHorizontal: 20,
                    backgroundColor: '#fff',
                    elevation: 0,
                    borderRadius: 10,
                    color: '#000',
                    fontSize: 16,
                    textAlignVertical: 'center',
                  }}>
                  Others
                </Text>
              </TouchableOpacity>
            </View>
            <Divider width={'100%'} />
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 15,
                alignItems: 'center',
              }}>
              <View style={{paddingRight: 10}}>
                <RadioActive />
              </View>
              <Text style={{fontSize: 16}}>Make this address as default</Text>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={{
              width: '92%',
              height: 50,
              marginVertical: 15,
              backgroundColor: '#7E72FF',
              alignSelf: 'center',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={handleSubmit}>
            <Text style={{color: 'white'}}>Save Address</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default EditAddressModal;
