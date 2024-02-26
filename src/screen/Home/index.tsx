import React, { useState } from 'react';
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import ListEmpety from '../../components/ListEmpety';
import TodoList from '../../components/Todo';

import LogoPng from "../../assets/Logo.png";
import { styles } from './styles'
import Header from '../../components/Header';

export default function Home() {

  const [ToDoList, setTodoList] = useState<string[]>([])
  const [taskName, setTaskName] = useState('');
  const [createdTask, setCreatedTask] = useState(0)
  const [done, setDone] = useState(0)


  function handleAddNewTask() {
    if(ToDoList.includes(taskName)){
       Alert.alert('Participante existe', 'ja existe um particpante na lista')
       return;
     }
  
     setTodoList(prevState => [...prevState, taskName]);
     setTaskName('')

     setCreatedTask(prevState => prevState + 1)
     console.log(ToDoList)
  }


  function handleRemoverTask(name: string) {
    Alert.alert("Removendo participante", `Voce realmente quer remover o participante... ${name}`, [
      {
        text: "Sim",
        // Removendo valores no estado 
        onPress: () => {
          setTodoList(prevState => prevState.filter(ToDoList => ToDoList !== name));
          setCreatedTask(prevState => prevState - 1)
        }
      }, 
      {
        text: "Cancelar",
        style: "cancel"
      }
    ])

    if(ToDoList.includes(taskName)) {
      console.log(taskName)
    }

   
  }

  function handleCheck(name: string) {   
      if(taskName.includes(taskName)) {
        setDone(prevState => prevState + 1)
        setTodoList(prevState => prevState.map(item => item === name? name : item))
      } 
     
  }


  


  return (
    <View style={styles.container}>

     <Header />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Adicionar uma nova tarefa'
          placeholderTextColor="#808080"
          onChangeText={setTaskName}
          value={taskName}
        />

        <TouchableOpacity style={styles.btn} onPress={handleAddNewTask}>
          <AntDesign name="pluscircleo" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.counts}>

        <View style={styles.create}>
          <Text style={styles.createText}>Criandas</Text>
          <View style={styles.countCreate}>
            <Text style={{ color: "#f2f2f2", fontSize: 14, fontFamily: 'Inter_700Bold' }}>{createdTask}</Text>
          </View>
        </View>

        <View style={styles.done}>
          <Text style={styles.doneText}>Concluidas</Text>
          <View style={styles.countdone}>
            <Text style={{ color: "#f2f2f2", fontSize: 14, fontFamily: 'Inter_700Bold', alignItems: "center", justifyContent: "center" }}>{done}</Text>
          </View>
        </View>

      </View>

      <View style={{padding: 24}}>
        <FlatList 
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={ListEmpety}
            data={ToDoList}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <TodoList 
                key={item}
                name={item}
                handleIsChecked={()=>handleCheck(item)}
                onRemove={() => handleRemoverTask(item)} Icon={''} size={''} color={''} />
            )}
        />
      </View>
      
      

    </View>
  );
}