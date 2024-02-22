import { TouchableOpacity, View } from 'react-native';

import { AntDesign,  } from '@expo/vector-icons';

type SocialButtonProps = {
  nameIcon: string
  sizeIcon: number,
  colorIcon: string,
  onPress: () => void
}


export default function SocialButton({nameIcon, sizeIcon, colorIcon, onPress} : SocialButtonProps) {
 return (
    <TouchableOpacity onPress={onPress}>
     <AntDesign name={nameIcon} size={sizeIcon} color={colorIcon} />
    </TouchableOpacity>
  );
}