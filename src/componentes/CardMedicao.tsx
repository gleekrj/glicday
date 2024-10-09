import { Card, Text } from "@rneui/themed";
import { StyleSheet, View } from "react-native";

export function CardMedicacao() {
  return (
    <View style={styles.container}>
      <Text>Texto</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    backgroundColor: "#FFF",
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 20,
  },
  card: {
    borderRadius: 20,
  },
});
