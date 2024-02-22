import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function Button() {
 return (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Entra</Text>
  </TouchableOpacity>

  );
}