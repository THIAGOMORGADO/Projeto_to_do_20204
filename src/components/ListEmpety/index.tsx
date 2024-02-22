import { Image, Text, View } from 'react-native';

import {styles} from './styles'

import EmptListImg from '../../assets/Clipboard.png'


export default function ListEmpety() {
 return (
   <View style={styles.container}>
    <View style={styles.emptyAre}>
      <Image source={EmptListImg} style={styles.img}/>
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subTitle}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
   </View>
  );
}