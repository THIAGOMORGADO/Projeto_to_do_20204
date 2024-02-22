import { TextInput, TouchableOpacity, View } from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';


export default function Input ({...rest}) {
 return (
    <TextInput {...rest} style={styles.input}/>
  );
}