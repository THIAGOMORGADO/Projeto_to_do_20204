import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';


type FootterButton = {
  nameText: String;
  
}

export default function Footer({nameText, ...rest} : FootterButton) {
  return (
    <>
      <TouchableOpacity {...rest}>
        <Text style={styles.text}>  {nameText}  </Text>
      </TouchableOpacity>
    </>
  );
}