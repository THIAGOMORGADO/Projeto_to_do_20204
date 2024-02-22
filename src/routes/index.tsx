import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import AppMain from './AppMain';

export default function Routes() {
 return (
   <NavigationContainer>
    <AppMain />
   </NavigationContainer>
  );
}