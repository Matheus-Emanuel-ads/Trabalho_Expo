import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function Form() {
  const [texto, setTexto] = useState("");
  const [numero, setNumero] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forms</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um texto"
        value={texto}
        onChangeText={setTexto}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite um número"
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});