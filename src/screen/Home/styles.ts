import { Inter_700Bold } from '@expo-google-fonts/inter';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a"
  },
  header: {
    backgroundColor: "#0d0d0d",
    height: 173,
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    flexDirection: 'row',
    marginTop: -25,
    paddingLeft: 20,
    gap: 12
  },
  input: {
    width: 271,
    backgroundColor: "#262626",
    height: 54,
    borderRadius: 5,
    paddingLeft: 16,
    color: "#f2f2f2",
    fontFamily:'Inter_400Regular',
    fontSize: 16
  },
  btn: {
    backgroundColor: "#1E6F9F",
    width: 54,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  counts: {
   
    flexDirection: 'row',
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderBottomColor: "#3333",
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    
  },
  create: {
    flexDirection: "row",
    gap: 8,
    alignItems: 'center'
  },
  createText: {
    color: "#4ea8de",
    fontSize: 14,
    fontFamily: 'Inter_700Bold'
  },
  countCreate: {
    backgroundColor: "#333333",
    width: 25,
    height: 19,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop:  2,
    paddingBottom: 2,
    borderRadius: 100,
    color: "#f2f2f2",
    fontSize: 14,
    fontFamily: 'Inter_700Bold'
  },
  done: {
    flexDirection: "row",
    gap: 8,
    alignItems: 'center'
  },
  doneText: {
    color: "#8284FA",
    fontSize: 14,
    fontFamily: 'Inter_700Bold'
  },
  countdone: {
    backgroundColor: "#333333",
    width: 25,
    height: 19,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop:  2,
    paddingBottom: 2,
    borderRadius: 100,
    color: "#f2f2f2",
    fontSize: 14,
    fontFamily: 'Inter_700Bold'
  },
})