import { Image, View } from 'react-native';
import { styles } from './style';



import HeaderLogo from '../../assets/Logo.png' 

export default function Header() {
 return (
  <View style={styles.container}>
    <Image source={HeaderLogo} />
  </View>
  );
}