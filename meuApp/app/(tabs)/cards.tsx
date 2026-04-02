import { View, Text, StyleSheet } from "react-native";

export default function Cards() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ícones</Text>

      <View style={styles.card}>
        <Text>Card 1</Text>
      </View>

      <View style={styles.card}>
        <Text>Card 2</Text>
      </View>

      <View style={styles.card}>
        <Text>Card 3</Text>
      </View>
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
  card: {
    backgroundColor: "#ddd",
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
  },
});