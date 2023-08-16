import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Front = () => {
const navigation = useNavigation();
  return (
    <View style = {styles.firstView}>

          <View style = {{alignContent: 'stretch', alignItems: 'center', justifyContent: 'center', marginTop: 350}}>
            <Text style = {styles.textStyle}>SWEETPEAN</Text>
            <Text style = {styles.textStyle2}>Your favourite Peanut hub</Text>
          </View>


          <View style = {{justifyContent: 'flex-end', marginTop: 180}}>

          <View>
           <TouchableOpacity style ={styles.touch1}  onPress = {() => navigation.navigate ('signup')}>
           <Text style = {{color: 'black', fontSize: 20, alignSelf: 'center', fontWeight: '700'}}>Sign Up</Text>
           </TouchableOpacity>   
        </View>

        <View style = {{paddingTop: 10}}>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
           <Text style = {{color: 'white', fontSize: 20, alignSelf: 'center', fontWeight: '700'}} onPress = {() => navigation.navigate ('login')}>Login</Text>
           </TouchableOpacity>
        </View>

          </View>
          

    </View>

  
  )
}

export default Front;

const styles = StyleSheet.create({
  firstView: {flex: 1,
    backgroundColor: 'brown',
  },
  
  textStyle: {fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    alignSelf: "stretch",
  },
  
  textStyle2: {color: 'yellow',
    paddingRight: 60,
    alignSelf: 'flex-end',
  },
  
  touch1: {backgroundColor: 'white',
  height: 50,
  width: 320,
  borderRadius: 10,
  justifyContent: 'center',
  alignSelf: 'center',
  },

  viewStyle: {flexDirection: 'row',
  height: 35,
  width: 320,
  borderWidth: 1,
  borderColor: 'black', 
  borderRadius: 10,
  },
})
