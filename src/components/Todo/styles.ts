import { Inter_400Regular } from '@expo-google-fonts/inter';
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  conteiner:{
    backgroundColor: "#262626",
    flexDirection: "row",
    
    alignItems: "center",
    padding: 20,
    gap: 10,
    borderRadius: 8,
    marginBottom: 10,
    textAlign: "left"
  },
  TodoListTextNoChecked: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    
    flex: 1,
    color: "#f2f2f2"
  },
  TodoListTextChecked: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    textDecorationLine: 'line-through',
    color: "#808080",
    
    flex: 1
  }
})