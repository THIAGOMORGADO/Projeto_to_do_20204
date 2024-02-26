import { useState } from 'react';

import { 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView, 
  Text, 
  View 
} from 'react-native';

import { styles } from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { useNavigation } from '@react-navigation/native'
import api from '../../services/api';


export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigaton = useNavigation();

  async function handleSignUp() {
      const newAccout = {
        name,
        email,
        password
      }


      try {
        const response = await api.post('/accounts', newAccout)

        console.log(response.data)


      } catch (error) {
        console.log(error)
      }
    // navigaton.navigate('Home')
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
          onChangeText={setName}
        />
        <Input 
          placeholder="E-mail" 
          placeholderTextColor="#f2f2f2"
          onChangeText={setEmail}
        />
        <Input 
          placeholder="Senha"
          placeholderTextColor="#f2f2f2"
          secureTextEntry
          onChangeText={setPassword}
         />
         <Button 
            nameButtonText='Cadastrar-se'
            onPress={handleSignUp}
         />
      </View>

   </KeyboardAvoidingView>
  );
}