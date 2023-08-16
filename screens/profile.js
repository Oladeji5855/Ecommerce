import { useNavigation } from '@react-navigation/native';
import { Text, TextInput, View,Image, TouchableOpacity, ScrollView } from 'react-native';
import {ChevronLeftIcon, PencilSquareIcon,
  Cog6ToothIcon, UserIcon,
  ClipboardDocumentIcon, StarIcon,
  GlobeAltIcon,ArrowRightOnRectangleIcon,
  DevicePhoneMobileIcon,ChevronRightIcon, PencilIcon,
} from 'react-native-heroicons/solid'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { child, get, getDatabase, ref, update } from 'firebase/database'
import { useState } from 'react';

export default 

function Details (){
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  function getProfile(){
    get(child(ref(getDatabase()), email.split('@')[0]))
    .then(result => success(result))
    .catch(error => failure(error))
  }

  function success(result){
    console.log(result);
  }
  function failure(error){
    console.log(error.message)
  }

    return(
   <ScrollView style={{flexDirection: 'column', flex: 1, backgroundColor:'white'}}>

     <View style={{flexDirection:'row', justifyContent:'flex-start', paddingTop: 60, marginLeft: 20}}> 
        <ChevronLeftIcon onPress={() => navigation.goBack()} size={20} color='black'/>
        <Text style={{alignSelf: 'center', fontSize: 20, fontWeight:'800',
        marginRight: 20, marginLeft: 90, }}>Personal Details</Text>
      </View> 

      <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Image style = {{marginTop: 40, borderRadius: 60, borderWidth: 40, width: 50, height: 50}}
        source={require('../assets/image.jpg')}></Image>
        <PencilSquareIcon size={15} color='gray'></PencilSquareIcon>
      </View>

      <View style = {{flexDirection: 'column', alignItems: 'center', paddingTop: 20}}>
        <Text style = {{fontSize: 18, fontWeight: '600'}}>Maryam Yahaya</Text>
        <Text style = {{color: 'gray', paddingTop: 5, fontSize: 10, fontWeight: '200'}}>Maryam@gmail.com</Text>
      </View>
      
    

          <View style={{marginTop: 30, marginBottom: 30, width: 400, height: 1, backgroundColor:'black',
          justifyContent:'flex-start'}}></View>

      <View style={{flexDirection: 'column', marginLeft: 20, justifyContent: 'flex-start'}}>
      

        <View style= {{paddingBottom: 20}}>
          <Text style= {{color: 'gray', fontSize: 12, paddingBottom: 5}}> Full Name </Text>
          <View style= {{flexDirection: 'row', borderWidth: 1.5, borderRadius: 8, borderColor: 'gray', height: 50, width: 320,
          alignItems: 'center', justifyContent: 'space-between'}}>
          <TextInput style = {{fontSize: 16, fontWeight: '500', paddingLeft: 10, width: 240}} placeholder = 'Maryam Yahaya' placeholderTextColor = {'black'}></TextInput>
          <PencilSquareIcon style = {{paddingRight: 10}} size={25} color = 'gray'></PencilSquareIcon>
          </View>
        </View>

        <View style= {{justifyContent: 'center', paddingBottom: 20}}>
          <Text style= {{color: 'gray', fontSize: 12, paddingBottom: 5}}> Email Address </Text>
          <View style= {{flexDirection: 'row', borderWidth: 1.5, borderRadius: 8, borderColor: 'gray', height: 50, width: 320,
          alignItems: 'center', justifyContent: 'space-between'}}>
          <TextInput style = {{fontSize: 16, fontWeight: '500', paddingLeft: 10}} placeholder = 'Maryam@gmail.com' placeholderTextColor = {'black'}></TextInput>
          <PencilSquareIcon size={25} color = 'gray'></PencilSquareIcon>
          </View>
        </View>
        
        <View style= {{justifyContent: 'center', paddingBottom: 20}}>
          <Text style= {{color: 'gray', fontSize: 12, paddingBottom: 5}}> Phone Number </Text>
          <View style= {{flexDirection: 'row', borderWidth: 1.5, borderRadius: 8, borderColor: 'gray', height: 50, width: 320,
          alignItems: 'center', justifyContent: 'space-between'}}>
          <TextInput style = {{fontSize: 16, fontWeight: '500', paddingLeft: 10}} placeholder = '0803 123 4567' placeholderTextColor={'black'}></TextInput>
          <PencilSquareIcon size={25} color = 'gray'></PencilSquareIcon>
          </View>
        </View>

        <View style= {{justifyContent: 'center', paddingBottom: 20}}>
          <Text style= {{color: 'gray', fontSize: 12, paddingBottom: 5}}> Billing Address </Text>
          <View style= {{flexDirection: 'row', borderWidth: 1.5, borderRadius: 8, borderColor: 'gray', height: 50, width: 320,
          alignItems: 'center', justifyContent: 'space-between'}}>
          <TextInput style = {{fontSize: 16, fontWeight: '500', paddingLeft: 10}} placeholder = 'No. 4, Are close, Bodija, Ibadan.' placeholderTextColor={'black'}></TextInput>
          <PencilSquareIcon size={25} color = 'gray'></PencilSquareIcon>
          </View>
        </View>


        <TouchableOpacity
        onPress={() => navigation.navigate("Message")} 
        style = {{height: 50, width: 320, borderRadius: 8, backgroundColor: 'green', justifyContent: 'center', marginBottom: 20}}>
          <Text style = {{textAlign: 'center',color: 'white', justifyContent: 'center', fontWeight: '600'}}>Save</Text>
        </TouchableOpacity>

      </View>
    

   </ScrollView> 

    );
}