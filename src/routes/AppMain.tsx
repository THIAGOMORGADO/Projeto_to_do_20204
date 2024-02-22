import {createNativeStackNavigator} from  '@react-navigation/native-stack'

import SignIn from '../screen/SignIn';
import Home from '../screen/Home';
import SignUp from '../screen/SignUp';

const Stack = createNativeStackNavigator();

export default function AppMain() {
 return (
   <Stack.Navigator
    initialRouteName='SignIn'
    screenOptions={{
      headerShown: false
    }}
   
   >
      <Stack.Screen name='SignIn' component={SignIn} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='Home' component={Home} />
   </Stack.Navigator>
  );
}