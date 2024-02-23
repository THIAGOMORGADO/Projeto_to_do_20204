import { TextInput, TouchableOpacity, View } from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';


export default function Input ({...rest}) {
 return (
    <TextInput 
    {...rest} 
    keyboardAppearance='dark'
    autoCorrect={false}
    autoCapitalize='none'
    autoComplete='off'
    
    style={styles.input}
    />
  );
}