import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  Alert, Button, Text, TextInput, View } from 'react-native';
import styles from './styles';

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] =useState(0);
  const [gender, setGender] =useState("");

  const pressHandler = ()=>{
    Alert.alert("Details", "are you sure you want to submit",[
      {text: "Yes", onPress: ()=>console.log("yes is pressed")},
      {text: "No", OnPress: () =>noHandler()}
    ])
  }
  const noHandler = () =>{
    setName("");
    setAge(0);
    setGender("");
  }
  return (
    <View style={styles.container}>
      <TextInput onChangeText={(text) =>setName(text)} style={styles.input} placeholder='Name'/>
      <TextInput onChangeText={(text) =>setAge(text)} style={styles.input} placeholder='Age' />
      <TextInput onChangeText={(text) =>setGender(text)} style={styles.input} placeholder='Gender'/>
      <Button title='submit' onPress={() =>pressHandler()}/>
      <Text>{name} {age} {gender}</Text>
      
      
      
    </View>
  );
}

