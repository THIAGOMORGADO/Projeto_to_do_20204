import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

import { styles } from './styles'

type TodoProps = {
  name: string,
  Icon: string,
  size: string,
  color: string,
  onRemove: () => void
  handleIsChecked: () => void
}

export default function TodoList({ name, Icon, size, color, onRemove, handleIsChecked} : TodoProps) {
  const [checked, setIsChecked] = useState(false)

  return (
    <View style={styles.conteiner}>
    
      <TouchableOpacity onPress={() => setIsChecked(prev => !prev)} onPressIn={handleIsChecked}>
        {!checked ? <Entypo name="circle" size={17} color="#43a8de" /> :
        <AntDesign name="checkcircle" size={17} color="#5e60ce" />}
      </TouchableOpacity>

      <Text style={!checked ?  styles.TodoListTextNoChecked:styles.TodoListTextChecked }>{name}</Text>
      
      <TouchableOpacity onPress={onRemove}>
        <EvilIcons name="trash" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}