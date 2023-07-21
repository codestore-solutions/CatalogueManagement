import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import StarIcon from '../../Components/StarIcon';
import FeedbackService from '../Services/FeedbackService';
import StarRating from '../Components/StarRating';
import RadioButton from '../Components/RadioButton';


const FeedbackForm = () => {
  const [rating, setrating] = useState(0);
  const [quality, setquality] = useState(0);
  const [delivery, setdelivery] = useState(0);
  const [demo, setdemo] = useState('');
  const [comment, setcomment] = useState('');
  const [suggestion, setsuggestion] = useState('');
  const [defect, setdefect] = useState('')

  async function giveFeedback() {
    await FeedbackService.giveFeedback(
      11,
      rating,
      comment,
      quality.toString(),
      delivery.toString(),
      defect,
      suggestion,
    )
      .then(res => {
        Alert.alert('Submitted!');
      })
      .catch(err => {
        Alert.alert('Sorry, Try again');
      });
  }

  return (
    <ScrollView style={styles.body}>
      <View>
        <Text style={styles.commentText}>Add Comment</Text>
        <TextInput
          style={styles.comment}
          onChangeText={val => {
            setcomment(val);
          }}
          placeholder="Description"
          focusable
          keyboardType="default"
        />
        <View>
          <Text style={styles.commentText}>Overall Rating</Text>
          <View style={styles.rateBox}>
            <StarRating selected={rating} onSelect={setrating} />
          </View>
        </View>
        <Text style={styles.ques}>
          Q1. How was the delivery experience of the product ?
        </Text>
        <View style={styles.rateBox}>
            <StarRating selected={quality} onSelect={setquality} />
          </View>
        <Text style={styles.ques}>
          Q2. How was the packaging of the product  ?
        </Text>
        <View style={styles.rateBox}>
            <StarRating selected={delivery} onSelect={setdelivery} />
          </View>
        <Text style={styles.ques}>
          Q3. Was any defects in the product?
        </Text>
        <View style={styles.rateBox}>
        <View style={styles.radio}>
        <RadioButton lables={['yes','no']} horizontal={true} selected={setdefect}/>
        </View>
        <Text style={styles.ques}>
          Q4. Any other suggestions?
        </Text>
        <TextInput style={styles.sugg}/>
          </View>
      
        <View style={styles.button}>
          <Button
            title="Submit"
            onPress={() => {
              giveFeedback();
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default FeedbackForm;

const styles = StyleSheet.create({
  sugg:{
    backgroundColor:'white',
    borderWidth:1,
    marginVertical:10
  },
  comment: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 100,
    borderWidth: 1,
    alignItems: 'flex-start',
    marginVertical: 20,
  },
  body: {
    backgroundColor: 'white',
    padding: 20,
    height:'100%'
  },
  rating: {
    flexDirection: 'row',
    height: 50,
    width: 50,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    elevation: 1,
  },
  rateBox: {
    marginVertical: 20,
  },
  ques: {
    color: 'black',
    fontSize: 18,
  },
  ans: {
    backgroundColor: 'white',
  },
  button: {
    marginVertical: 30,
    width: 100,
    alignSelf:'center'
  },
  commentText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  radio:{
    flexDirection:'row',
    marginBottom:20
  }
});
