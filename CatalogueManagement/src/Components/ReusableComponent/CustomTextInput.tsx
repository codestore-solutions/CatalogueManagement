import {View, Text, TextInput, KeyboardTypeOptions} from 'react-native';
import React from 'react';
import {COLORS} from '../../Constants/colors';

const CustomTextInput = ({
  placeholder,
  error,
  setError,
  value,
  type = 'default',
  setValue,
}: {
  placeholder: string;
  error: string;
  setError: Function;
  value: string;
  setValue: Function;
  type?: KeyboardTypeOptions;
}) => {
  return (
    <View>
      <View
        style={{
          borderColor: error ? COLORS.Danger : COLORS.BorderColor,
          borderRadius: 10,
          borderWidth: 1,
        }}>
        <TextInput
          style={{borderRadius: 10, paddingHorizontal: 15, fontWeight: '400'}}
          placeholder={placeholder}
          placeholderTextColor={COLORS.TextLight}
          value={value}
          keyboardType={type}
          onChangeText={text => {
            setError('');
            setValue(text);
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

export default CustomTextInput;
