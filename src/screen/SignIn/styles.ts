import { Inter_400Regular } from '@expo-google-fonts/inter';
import { StyleSheet } from "react-native"; 


export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    flex:1,
    
  },
  form: {
    
    justifyContent: "center",
    
    height: "50%",
    padding: 50
  },
  text: {
    color: "#f2f2f2",
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    marginBottom: 10
  },
  btnArea:{
    padding: 10,
    width: "100%",
    alignItems: 'center',
    
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: "#1a1a1a",
  },
  FooterText: {
    color: "#f2f2f2",
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    marginBottom: 10
  },
})