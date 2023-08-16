import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Upsign from './screens/upsign';
import Front from './screens/front';
import Login from './screens/Login';
import Dashboard from './screens/dashboard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Details from './screens/profile';


function App() {

  let list1 = [1, 2, 3, 4, 5, 6, 7, 8 , 9]; // list of Number/Integers
  let list2 = ['bode', 'dezzy', 'kincade', 'macguy']; // list of string
  let list3 = [true, false, true, false, false, true]; // list of boolean
  let list4 = [true, 1, 'bode', 3, false, 'dexxy']; // combination of data types

  console.log(list1.length);
  for(let bode = 0; bode < list1.length; bode++){

    console.log(bode);
  }
  console.log(list1);

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='first' component={Front} options={{ headerShown: false}} />
        <Stack.Screen name='signup' component={Upsign} options={{ headerShown: false}}/>
        <Stack.Screen name='login' component={Login} options={{ headerShown: false}}/>
        <Stack.Screen name='profile' component={Details} options={{headerShown: false}}/>
        <Stack.Screen name= 'dashboard' component={Dashboard} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});

export default App;





 