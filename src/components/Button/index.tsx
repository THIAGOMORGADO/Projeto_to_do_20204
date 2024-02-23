import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { styles } from './styles';


type  ButtonProps = {
    onPress: () => void;
    nameButtonText: string
}

export default function Button({onPress, nameButtonText}:ButtonProps) {
 return (
  <TouchableOpacity 
    style={styles.button} 
     onPress={onPress} 
    
      >
    <Text style={styles.buttonText}>{nameButtonText}</Text>
  </TouchableOpacity>

  );
}