import { TouchableOpacity, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';



export default function GoogleButton() {
 return (
    <TouchableOpacity>
      <AntDesign name="google" size={24} color="#f2f2f2" />
    </TouchableOpacity>
  );
}