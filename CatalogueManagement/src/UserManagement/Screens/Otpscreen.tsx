import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';

const Otpscreen = (props: {navigation: {navigate: (arg0: string) => void}}) => {
  //REFFERENCE HOOK FOR EVERY INPUT FIELD

  const ref1: any = useRef();
  const ref2: any = useRef();
  const ref3: any = useRef();
  const ref4: any = useRef();
  const ref5: any = useRef();
  const ref6: any = useRef();

  const [val1, setval1] = useState('');
  const [val2, setval2] = useState('');
  const [val3, setval3] = useState('');
  const [val4, setval4] = useState('');
  const [val5, setval5] = useState('');
  const [val6, setval6] = useState('');

  return (
    <View style={styles.body}>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          fontWeight: '400',
          alignSelf: 'flex-start',
          marginTop: 100,
          marginBottom: 15,
        }}>
        Verification Code
      </Text>
      <Text style={{alignSelf: 'flex-start', color: 'black'}}>
        We have sent the verification code to
      </Text>
      <Text style={{alignSelf: 'flex-start', color: 'black'}}>your number</Text>
      <View style={styles.otpView}>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          ref={ref1}
          onChangeText={val => {
            if (val.length >= 1) {
              setval1(val);
              ref2.current.focus();
            }
          }}
        />
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          ref={ref2}
          onChangeText={val => {
            if (val.length >= 1) {
              setval2(val);
              ref3.current.focus();
            }
            if (val.length == 0) {
              ref1.current.focus();
            }
          }}
        />
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          ref={ref3}
          onChangeText={val => {
            if (val.length >= 1) {
              setval3(val);
              ref4.current.focus();
            }
            if (val.length == 0) {
              ref2.current.focus();
            }
          }}
        />
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          ref={ref4}
          onChangeText={val => {
            if (val.length >= 1) {
              setval4(val);
              ref5.current.focus();
            }
            if (val.length == 0) {
              ref3.current.focus();
            }
          }}
        />
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          ref={ref5}
          onChangeText={val => {
            setval5(val);
            if (val.length >= 1) {
              ref6.current.focus();
            }
            if (val.length == 0) {
              ref4.current.focus();
            }
          }}
        />
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          ref={ref6}
          onChangeText={val => {
            if (
              val.length >= 1 &&
              val1 != '' &&
              val2 != '' &&
              val3 != '' &&
              val4 != '' &&
              val5 != ''
            ) {
              props.navigation.navigate('Tab');
            }
            if (val.length == 0) {
              ref5.current.focus();
            }
          }}
        />
      </View>
      <Text style={{fontSize: 18, fontWeight: '400'}}>00:59</Text>
      <Text style={{fontWeight: '400'}}>
        Didn't recieve the code? <Text style={{color: '#7E72FF'}}>Resend</Text>
      </Text>
    </View>
  );
};

export default Otpscreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 60,
    width: 60,
    borderRadius: 15,
    fontSize: 26,
    textAlign: 'center',
    margin: 10,
  },
  otpView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginVertical: 20,
  },
  body: {
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
