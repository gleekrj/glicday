import { Button, CheckBox, Text } from "@rneui/themed";
import { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { termos } from "./Utils/TermosUso";

export default function Termo({ navigation }) {
  const [check, setCheck] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.voltar}>&lt;</Text>
      </TouchableOpacity>
      <Text h3 h3Style={styles.titleText}>
        Termos de Uso e Politica de Privacidade
      </Text>
      {termos.map((termo) => (
        <View key={termo.id}>
          <Text style={{ fontWeight: "bold", marginBottom: 15 }}>
            {termo.id}. {termo.titulo}
          </Text>
          <Text style={{ marginBottom: 15 }}>{termo.texto}</Text>
        </View>
      ))}
      <CheckBox
        title="Li e aceito os Termos de Uso e Politica de Privacidade."
        checked={check}
        onPress={() => setCheck(!check)}
      />
      <Button
        disabled={!check}
        title="Continuar"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("Tabs")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#FBFBFB",
    padding: 20,
  },
  titleText: {
    fontWeight: "normal",
    color: "#000",
    paddingTop: 10,
    paddingBottom: 24,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center",
    lineHeight: 32,
  },
  voltar: {
    fontSize: 50,
    fontWeight: "normal",
    color: "#1365A0",
  },
  button: {
    backgroundColor: "#1365A0",
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 50,
  },
});
