import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { useNavigation } from '@react-navigation/native'

export default function SignUp() {
  const navigaton = useNavigation();

  function handleSignUp() {
    navigaton.navigate('Home')
  }  

 return (
      <KeyboardAvoidingView
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
     

      <View style={styles.sectionArea}>
        <Text style={styles.sectionText}>Cadastra-se</Text>
      </View>

      <View style={styles.forms}>
      <Input 
          placeholder="Nome" 
          placeholderTextColor="#f2f2f2"
        />
        <Input 
          placeholder="E-mail" 
          placeholderTextColor="#f2f2f2"
        />
        <Input 
          placeholder="Senha"
          placeholderTextColor="#f2f2f2" 
         />
         <Input 
          placeholder="Confirma senha"
          placeholderTextColor="#f2f2f2" 
         />
         <Button 
            nameButtonText='Cadastrar-se'
            onPress={handleSignUp}
         />
      </View>

   </KeyboardAvoidingView>
  );
}