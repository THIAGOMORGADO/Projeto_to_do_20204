import { Image, View, Animated,  } from 'react-native';
import { styles } from './style';



import HeaderLogo from '../../assets/Logo.png' 
import { useState } from 'react';

export default function Header() {
  const [logo] = useState(new Animated.ValueXY({x: 400, y: 100}));


 return (
  <View style={styles.container}>
    <Animated.Image 
      source={HeaderLogo} 
    />
  </View>
  );
}