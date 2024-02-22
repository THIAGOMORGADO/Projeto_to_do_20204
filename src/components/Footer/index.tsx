import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function Footer() {
  return (



    <View style={styles.footer}>

      <TouchableOpacity>
        <Text style={styles.text}>Esqueci minha senha  </Text>
      </TouchableOpacity>
      <Text style={styles.text}>/</Text>
      <TouchableOpacity>
        <Text style={styles.text}>  criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}