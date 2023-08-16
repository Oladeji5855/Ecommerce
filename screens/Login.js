import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import {ArrowSmallLeftIcon,} from  "react-native-heroicons/solid";
import {EyeSlashIcon, LockClosedIcon, UserIcon} from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import {} from '../firebase';
import {getAuth, signInWithEmailAndPassword, } from 'firebase/auth';
import {ref, getDatabase} from 'firebase/database';

import { Database } from 'firebase/database';
import React, { useState } from 'react'

function Login  () {
  const backarrow = useNavigation();

     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     function success(result) {
      console.log(result);
      console.log(email)
      backarrow.navigate('dashboard', {'email': email})
     }

     function failure(error){
      console.log(error.message)
     }

     

     function login (){

      if(email === ''){
        return console.log('email is required')
      }

      if(password === ''){
        return console.log('password is required');
      }

      signInWithEmailAndPassword(getAuth(), email, password)
      .then(result => success(result)).catch(error => failure(error))
     }

  return (
  
    <View style = {{flex: 1, backgroundColor: 'white'}}>

      <View style = {{marginTop: 50, justifyContent: 'flex-start', paddingLeft: 20}}>
      <ArrowSmallLeftIcon onPress={() => backarrow.goBack()} color = 'black' size = {20}></ArrowSmallLeftIcon>
      <Text style = {{paddingTop: 20, fontSize: 16, fontWeight: '800', color: 'brown'}}>Welcome back!</Text>
      </View>

      <View style ={{marginTop: 100, justifyContent: 'flex-start', paddingLeft: 20}}>
        <Text style = {{fontSize: 12}}>Enter E-mail</Text>
         <View style={styles.ViewStyle}>
           <UserIcon color = 'gray' size = {15} style={styles.LeftIcon1}></UserIcon>
          <TextInput style = {styles.TextInput} onChangeText = {newValue => setEmail(newValue)}>
          </TextInput>
         </View>
      </View>
     
      <View style = {{marginTop: 40, justifyContent: 'flex-start', paddingLeft: 20}}>
        <Text style = {{fontSize: 12}}>Enter Password</Text>
            <View style = {styles.ViewStyle}>
              <LockClosedIcon color= {'gray'} size = {15} style = {styles.LeftIcon2}></LockClosedIcon>
              <TextInput style = {styles.TextInput} onChangeText = {newValue => setPassword(newValue)}>
              </TextInput>
              <EyeSlashIcon color= {'gray'} size = {15} style = {styles.LeftIcon3}></EyeSlashIcon>
            </View>
       </View>
            <Text style = {{paddingRight: 20, textAlign: 'right', fontSize: 10, marginTop: 15, color: 'brown'}}>Forget password?</Text>

            <TouchableOpacity style = {{height: 50, width: 320, backgroundColor: 'brown', 
            borderRadius: 10, marginTop: 120, alignSelf: 'center', justifyContent:'center' }} onPress={() => login()}>
                <Text style = {{color: 'white', fontSize: 20, fontWeight: '700', alignSelf: 'center'}}>Log In</Text>
            </TouchableOpacity>

            <Text style = {{paddingTop: 10, alignSelf: 'center', fontSize: 12}}>Don't have an account?
            <Text style={{ color: 'brown', textDecorationLine: 'underline'}} onPress={() => backarrow.navigate('signup')}> Sign Up</Text></Text>
           
    </View>


  )
}


  // * import the firbase functionalities from firbase package 
  // 1. get inputs from the user
  // (by creating a variable for both email and password and refencing them inside the textInputs)
  // 2. create a function that houses the login logic
  // 3. implement the login logic inside the function
  // 4. reference the login function inside the login button 

export default Login;

const styles = StyleSheet.create({
        ViewStyle: {flexDirection: 'row',
        height: 35,
        width: 320,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        },

        LeftIcon1: {alignSelf: 'center',
        paddingLeft: 40,
        },

        LeftIcon2: {alignSelf: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 40,
        },

        LeftIcon3: {alignSelf: 'center',
        justifyContent: 'flex-end',
        paddingRight: 10,
       },

       TextInput: {height: 35,
        width: 250,
        alignSelf: 'center',
      },

})


