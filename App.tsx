import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screen/Home';

import {useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold} from '@expo-google-fonts/inter'
import Routes from './src/routes';


export default function App() {
  const  [fontsLoading] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  })
  
  if(!fontsLoading) {
    return null
  }
  return (
    <>
      <StatusBar style='light' backgroundColor='transparent' translucent/>
       <Routes />
    </>
   
  );
}

