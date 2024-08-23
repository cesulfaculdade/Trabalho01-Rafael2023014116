import React from "react";
import { StatusBar } from "expo-status-bar"
import { StyleSheet,Text, TextInput, View } from "react-native"

export default function Home() {
  return (
    <View style={styles.container}>
      
      <View style={styles.secaoRoxa}>
        <Text style={styles.title}>Lista de Compras</Text>
        
      </View> 
      
        <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione um novo produto"
          placeholderTextColor="#BDBABA"
          keyboardType="default"
          />
      </View>
      <View style={styles.secaoBranca}></View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      flex:  1,     
      flexDirection: "column"
  },
  secaoRoxa: {
      flex: 2,
      backgroundColor: "#7A4A9E",
      justifyContent: 'center', 
      alignItems: 'center'
  },
  input: {
    flex: 3,
    backgroundColor: "#fff",
    height: 56,
    padding: 16,
    fontSize: 18,
    borderRadius: 5,
    marginRight: 16,
    
  },
  form: {
    width: "80%",
    flexDirection: "row",
    marginTop: 18,
    marginBottom: 36,
    position: "relative",
    marginLeft: 24
  },
  secaoBranca: {
      flex: 7,
      backgroundColor: "#FFF"
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold"
  }
})