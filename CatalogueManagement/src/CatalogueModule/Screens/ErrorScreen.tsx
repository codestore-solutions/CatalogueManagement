import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const ErrorScreen = (props: {
  navigation: {navigate: (arg0: string) => void};
}) => {
  return (
    <View>
      <Text style={{fontSize: 250, color: 'yellow', textAlign: 'center'}}>
        😵
      </Text>
      <Text style={{fontSize: 50, textAlign: 'center'}}>ERROR !</Text>
      <View style={{width: 150, alignSelf: 'center', margin: 100}}>
        <Button
          onPress={() => {
            props.navigation.navigate('Home');
          }}
          title="Go home"
        />
      </View>
    </View>
  );
};

export default ErrorScreen;

const styles = StyleSheet.create({});
