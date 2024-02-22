import {  KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

import {styles} from './styles'
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import GoogleButton from '../../components/GoogleButton';
import AppleButton from '../../components/AppleButton';
import Footer from '../../components/Footer';
import SocialButton from '../../components/AppleButton';

export default function SignIn() {
 return (
   <KeyboardAvoidingView 
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
   >
      <Header />

      <View style={styles.form}>
        <Text
          style={styles.text}
        >Email</Text>
        <Input
          placeholder='Digite seu email'
          placeholderTextColor="#808080"
           
        />
        <Text
           style={styles.text}
        >Senha</Text>
        <Input  
          placeholder='Adicionar uma nova tarefa'
          placeholderTextColor="#808080" 
        />

        <View style={styles.btnArea}>
          <Button /> 
        </View>
      </View>


      <View style={{ flexDirection: 'row', marginTop: '10%', alignItems: 'center', justifyContent: 'center', gap: 30}}>
      <SocialButton 
          nameIcon='google'
          sizeIcon={24}
          colorIcon='#f2f2f2' 
          onPress={() => console.log('Olá, eu sou o botão do apple')}
        />
        <SocialButton 
          nameIcon='apple1'
          sizeIcon={24}
          colorIcon='#f2f2f2' 
          onPress={() => console.log('Olá, eu sou o botão do apple')}
        />
     </View>

     <Footer/>
   </KeyboardAvoidingView>
  );
}