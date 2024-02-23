import {  KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';



import {styles} from './styles'
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import SocialButton from '../../components/AppleButton';

import {useNavigation} from '@react-navigation/native'

export default function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home')
  }
  function handleNewAccouts() {
    navigation.navigate('SignUp')
  }
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
          placeholder='Digite seu password'
          placeholderTextColor="#808080" 
        />

        <View style={styles.btnArea}>
          <Button onPress={handleSignIn} nameButtonText='Entra'/> 
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
     <View style={styles.footer}>
        <Footer nameText="Esqueceu a senha" />
          <Text style={styles.FooterText}>/</Text>
        <Footer nameText="Criar conta" onPress={handleNewAccouts}/>
     </View>
   </KeyboardAvoidingView>
  );
}