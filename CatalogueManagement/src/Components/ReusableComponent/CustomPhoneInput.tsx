import {View, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import {COLORS} from '../../Constants/colors';
import ReactNativePhoneInput from 'react-native-phone-input';

const CustomPhoneInput = ({
  error,
  setError,
  placeholder,
  value,
  setValue,
  inputRef,
}: {
  setError: Function;
  error: string;
  placeholder: string;
  value: string;
  setValue: Function;
  inputRef: any;
}) => {
  return (
    <View>
      <View
        style={{
          borderColor: error ? COLORS.Danger : COLORS.BorderColor,
          borderRadius: 10,
          borderWidth: 1,
          height: 50,
        }}>
        <ReactNativePhoneInput
          style={{paddingHorizontal: 5, flex: 1}}
          autoFormat
          ref={inputRef}
          onChangePhoneNumber={text => {
            setValue(text);
            setError('');
          }}
          onPressFlag={() => {}}
          renderFlag={() => <></>}
          textProps={{
            placeholder: placeholder,
            placeholderTextColor: COLORS.TextLight,
          }}
        />
      </View>
      {error != '' && (
        <Text
          style={{
            color: COLORS.Danger,
            fontSize: 14,
          }}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default CustomPhoneInput;
