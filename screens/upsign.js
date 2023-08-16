import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { DevicePhoneMobileIcon, EnvelopeIcon, EyeSlashIcon, LockClosedIcon,
         MapPinIcon,
         StopIcon, UserIcon } from 'react-native-heroicons/outline';
import '../firebase';
import { getAuth, createUserWithEmailAndPassword,} from 'firebase/auth';
import { ref, getDatabase, set } from 'firebase/database';


const Upsign = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [address, setAddress] = useState('');

  function clearData () {
    setEmail('');
    setPassword('');
    setFullname('');
    setPhonenumber('');
    setAddress('');

  }

  function storeSuccess(result) {
    console.log(result);
    console.log('database stored')
  }

  function storeFailure(error) {
    console.log(error);
    console.log('database not stored')
  }

  function success(result) {
    console.log(result)

    set(ref(getDatabase(), fullname), {
      fullname: fullname,
      email: email,
      password: phonenumber,
      address: address,
    })
    .then(result => storeSuccess(result)).catch(error => storeFailure(error))
    // clearData();
    navigation.navigate('login');
  }

  function failure(error) {
    console.log(error.message);
  }

 function signup(){

  if(email === ''){
   return console.log('Email is required');
  }

  if(password === ''){
    return console.log('Password is required');
  }

  if(fullname === ''){
    return console.log('Fullname is required');

  }

  if(phonenumber === ''){
    return console.log('Phone number is required');
  }

  if(address === ''){
    return console.log('Mailing Address is required')
  }
  createUserWithEmailAndPassword(getAuth(), email, password)
  .then(result => success(result)).catch(error => failure(error));

 }

  return (
    <View style = {styles.GView}>

      <View style = {styles.View1}>
        <ArrowLeftIcon size = {20} color = {'black'} onPress = {() => navigation.goBack()}></ArrowLeftIcon>
        <Text style = {{paddingTop: 20, fontSize: 16, fontWeight: '800', color: 'brown'}}>Let's create your account</Text>
      </View>

          <View style = {styles.View2}>
                <Text style = {{ fontSize: 12}}>Full Name</Text>
                <View style = {styles.ViewStyle}>
                <UserIcon size={20} color = {'gray'} style = {styles.AIcon}></UserIcon>
                <TextInput style = {styles.TextInput} onChangeText={newValue => setFullname(newValue)} placeholder = 'Surname First' ></TextInput>
                </View>
          </View>

          <View style ={styles.View2}>
            <Text>Email</Text>
            <View style = {styles.ViewStyle}>
            <EnvelopeIcon size = {20} color = {'gray'} style = {styles.AIcon}></EnvelopeIcon>
            <TextInput style = {styles.TextInput} onChangeText={newValue => setEmail(newValue)}></TextInput>
            </View>
          </View>

          <View style = {styles.View2}>
              <Text>Password</Text>
              <View style = {styles.ViewStyle}>
              <LockClosedIcon color = {'gray'} size = {20} style = {styles.BIcon}></LockClosedIcon>
              <TextInput style = {styles.TextInput} onChangeText={newValue => setPassword(newValue)} placeholder = '******'></TextInput>
              <EyeSlashIcon color = {'gray'} size = {20} style = {styles.CIcon}></EyeSlashIcon>
              </View>
          </View>

            <View style = {styles.View2}>
              <Text>Phone Number</Text>
              <View style = {styles.ViewStyle}>
              <DevicePhoneMobileIcon color={'gray'} size = {20} style = {styles.AIcon}></DevicePhoneMobileIcon>
              <TextInput style = {styles.TextInput} onChangeText = {newValue => setPhonenumber(newValue)} ></TextInput>
              </View>
              
            </View>

            <View style = {styles.View2}>
              <Text>Mailing Address</Text>
             <View style ={styles.ViewStyle}>
              <MapPinIcon color={'gray'} size = {20} style = {styles.AIcon}></MapPinIcon>
             <TextInput style = {styles.TextInput} onChangeText = {newValue => setAddress(newValue)} ></TextInput>
             </View>
            </View>

          <View style = {{flexDirection: 'row', marginTop: 30, paddingLeft: 20}}>
            <StopIcon color = {'gray'} size = {45}></StopIcon>
            
            <Text style = {{color: 'gray', fontSize: 11, alignSelf: 'center',
            fontWeight: '600', width: 280}}>By continuing you agree to Sweetpean's Terms
            of Service and Privacy Policy</Text>
          </View>

          <TouchableOpacity style = {{marginTop: 80, height:50, width: 320, borderRadius: 10, backgroundColor: 'brown',
            justifyContent: 'center', alignSelf: 'center'}} onPress={() => signup()}>
            <Text style = {{fontSize: 20, fontWeight: '700', color: 'white', alignSelf: 'center', }}>Sign up</Text>
          </TouchableOpacity>

            <Text style = {{alignSelf: 'center', paddingTop: 10}}>Already have an account? 
            <Text style = {{paddingLeft: 5, color: 'brown'}} onPress = {() => navigation.navigate('login')}> Log in</Text></Text>

    </View>
  )
}

export default Upsign

const styles = StyleSheet.create({
    ViewStyle: {flexDirection: 'row',
    height: 35,
    width: 320,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    },

    AIcon: {alignSelf: 'center',
    paddingLeft: 40,
    },

    TextInput: {height: 35,
    width: 250,
    alignSelf: 'center',
    },

    GView: {flex: 1,
    backgroundColor: 'white',
    },

    View1: {marginTop: 50,
    paddingLeft: 20,
    justifyContent: 'flex-start',
    },

    View2: {justifyContent: 'flex-start',
    marginTop: 20,
    paddingLeft: 20,
    },

    BIcon: {alignSelf: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 40,
    },

    CIcon: {alignSelf: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10,
    },

})


