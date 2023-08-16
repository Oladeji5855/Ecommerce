import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, FlatList} from 'react-native';
import { AdjustmentsHorizontalIcon, ArrowSmallLeftIcon, Bars3Icon, ChevronLeftIcon, MagnifyingGlassCircleIcon,
         MagnifyingGlassIcon, MapPinIcon, UserCircleIcon,} from 'react-native-heroicons/solid';
import '../firebase';
import { getDatabase, ref, get, child } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function Dashboard( {email} ) {

  console.log(`email ${email}`)
    const navigation = useNavigation()

  const pricetag = [
    
    {
      id: "1",
      name: "Nutzy Extra Crunchy Peanut Butter",
      amount: '#1500',
  },
  {
      id: "2",
      name: "Nutzy Extra Crunchy Peanut Butter",
      amount: '#2000',
  },
  {
      id: "3",
      name: "Nutzy Extra Crunchy Peanut Butter",
      amount: '#3500',
  },
  {
      id: "4",
      name: "Nutzy Extra Crunchy Peanut Butter",
      amount: '#4000',
  },

  ]

  // const [email, setEmail] = useState('');
  // const [username, setUsername] = useState('');

  // function success(result){
  //   console.log(result.val().email);
  //   setEmail(result.val().email);
  //   setUsername(result.val().username);
  // }

  // function failure(error){
  //   console.log(error.message);
  // }

  function effect(){
    
    get(child(ref(getDatabase()), '')).then(result => success(result))
    .catch(error => failure(error))
  }


  useEffect(effect);




  return (
    <View style = {{ flex: 1,  backgroundColor: 'gray', flexDirection: "column" }}>

       <View style = {{flexDirection: "column", backgroundColor: 'brown',borderBottomLeftRadius: 15, paddingTop: 40, 
              borderBottomRightRadius: 15, justifyContent: 'flex-start', height: 160}}>


 <View style = {{paddingLeft: 20, paddingRight: 20, paddingBottom: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
 <ArrowSmallLeftIcon color = 'white' onPress={() => navigation.goBack()}></ArrowSmallLeftIcon>
 <TouchableOpacity onPress={() => navigation.navigate('profile')}>
 <UserCircleIcon color = 'white'></UserCircleIcon>
 </TouchableOpacity>
 
 </View>

<View style = {{paddingTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
<Text style = {{color: 'white', paddingLeft: 25, fontWeight: '700'}}>{ email}</Text>

<View style = {{justifyContent: 'center', borderRadius: 10, height: 35, backgroundColor: 'white', width:150, marginEnd:20,
   flexDirection: 'row', alignItems: 'center'}}>


<Text style = {{color: 'brown', paddingLeft: 15}} >Current Location</Text>
<MapPinIcon size={20} color = 'brown'></MapPinIcon>
  
</View>


</View>
      
  </View>

  
  <View style = {{flexDirection: 'row', paddingTop: 10, justifyContent: 'center'}}>
                 
                 <View style = {{flexDirection: 'row', alignContent: 'center', paddingLeft: 10, borderWidth: 1, borderRadius: 5,
                  borderColor: 'black', width: 300, height: 40, alignItems: 'center'}}>
                  <MagnifyingGlassIcon size={25} color = 'black'></MagnifyingGlassIcon>
                  <TextInput  placeholder = 'Find Your Peanut Butter Products' placeholderTextColor={'black'}></TextInput>
                  </View>
                  <View style ={styles.first}>
                  <AdjustmentsHorizontalIcon size={25} color = 'white' ></AdjustmentsHorizontalIcon>
                  </View> 
  </View>

  <View style = {{
    flexDirection: "column", 
    backgroundColor: 'white',
    marginBottom: 15,
    alignItems: 'center',
    marginTop: 15,
    height: 200
    }}>
         <Image style = {{height:150, width: 100, marginTop: 25}} source = {require('../Screen/assets/nutzy.jpg')}></Image>
  </View>


   <View style = {{flexDirection: 'column', marginTop: 5, backgroundColor: 'white', height: 110}}>
             <Text style = {{fontWeight: '800', fontSize: 18, paddingLeft: 20}}>Nutzy Extra Crunchy Peanut Butter - 510g</Text>
             <Text style = {{color: 'gray', paddingLeft: 20, fontWeight: '600'}}>Brand: <Text style = {{fontWeight: '800', fontSize: 18, color: 'black'}}>Nutzy</Text></Text>
             <TouchableOpacity style= {{height: 50, width: 300, backgroundColor: 'red', borderRadius: 10, alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}> 
             <Text style = {{fontWeight: '800',  fontSize: 20, color: 'white', }}>Add to Cart</Text>
             </TouchableOpacity>

   </View>

  <FlatList
  data={pricetag}
  renderItem={(item) => {
    return <>
    <View style={{height: 160, width: 130, backgroundColor: 'white', margin: 10, borderRadius: 10, }}>

    <Image style = {{height:80, width: 50, marginTop: 10, alignSelf: 'center'}} source = {require('../Screen/assets/nutzy.jpg')}></Image>

  <Text style={{color: 'black', fontSize: 12, marginLeft: 5, marginTop: 5}}> { item.item.name} </Text>

  <Text style={{ color: 'red', marginLeft: 5, marginTop: 10, fontWeight: '600' }}> {item.item.amount} </Text>

  </View>
  </>
  }} 
  keyExtractor={(item) => item.id.toString()}
  horizontal={true}
  ></FlatList>



    </View>
  );
}
  


const styles = StyleSheet.create({
  first: {
    justifyContent:'center', 
   backgroundColor: 'brown', 
   width:40,
   height:40, 
   borderRadius: 10, 
   alignContent: 'center', 
  alignItems: 'center',
  marginLeft: 15
  },
  second: {

  }
})

  // data types
  // String => Alphabet ("bode") String bode
  // Number => 1, 2, 3, 4, 5, 1000000
  // List/Array => [] --- very important
  // Object => {} -- very important
  // boolean --- true/false


  // variables
  // let and const
  // let -- the value can be changed || const -- the value cannot be changed
  // let bode = 22
  // const bode = "bode"
  
  // functions
  // 2ways to create function
  // const bode = () => {}
  // function bode () {}

  // logic begins before return
  

