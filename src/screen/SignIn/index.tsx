import {
  KeyboardAvoidingView,
  Platform,
  Animated,
  Keyboard,
  Text,
  View,
  Alert,
} from "react-native";

import { styles } from "./styles";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import SocialButton from "../../components/AppleButton";

import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { useToast } from "native-base";

export default function SignIn() {
  const toast = useToast();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Estados de animacoes
  const [offset] = useState(new Animated.ValueXY({x:  0, y: 90}));
  const [opacity] = useState(new Animated.Value(0));



  const navigation = useNavigation();

  async function handleSignIn() {
    try {
      const response = await api.post("/accounts/auth", {
        email,
        password,
      });
      if (response.status === 200) {
        navigation.navigate("Home");
      }
    } catch (error) {
      toast.show({
        title: "Nao foir possive acessar este servico tente mais tarde",
        placement: "top",
        bgColor: "red.500",
      });
    }
  }
  function handleNewAccouts() {
    navigation.navigate("SignUp");
  }

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: false
      }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false
        })
    ]).start()
  }, [])
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header />

      <Animated.View 
      style={[styles.form, {
        opacity: opacity,
        transform: [
          {translateY: offset.y}
        ],
      }]}
      >
        <Text style={styles.text}>Email</Text>
        <Input
          placeholder="Digite seu email"
          placeholderTextColor="#808080"
          onChangeText={setEmail}
          value={email}
          
        />
        <Text style={styles.text}>Senha</Text>
        <Input
          placeholder="Digite seu password"
          placeholderTextColor="#808080"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />

        <View style={styles.btnArea}>
          <Button onPress={handleSignIn} nameButtonText="Entra" />
        </View>
        <View style={styles.footer}>
        <Footer nameText="Esqueceu a senha" />
        <Text style={styles.FooterText}>/</Text>
        <Footer nameText="Criar conta" onPress={handleNewAccouts} />
      </View>
      </Animated.View>
     
    </KeyboardAvoidingView>
  );
}


