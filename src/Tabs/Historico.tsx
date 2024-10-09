import { Text } from "@rneui/themed";
import { ScrollView, StyleSheet, View } from "react-native";
import { CardMedicacao } from "../componentes/CardMedicao";

const historico = [
  {
    id: 1,
    glicemia: 126,
    data: "17/08/2023",
    hora: "20:00",
    anotacoes: "Comi um pedaço de bolo",
    exibeDetalhe: false,
  },
  {
    id: 2,
    glicemia: 84,
    data: "17/08/2023",
    hora: "22:00",
    anotacoes: "Parei de comer besteira",
    exibeDetalhe: false,
  },
];

export default function Historico() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 1,
          alignSelf: "flex-start",
          justifyContent: "flex-start",
          padding: 20,
        }}
      >
        <Text h2 h2Style={styles.titleText}>
          Olá, Daniel!
        </Text>
        <Text h4 h4Style={styles.subTitleText}>
          Últimas Medições
        </Text>
      </View>
      <CardMedicacao />
      <CardMedicacao />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titleText: {
    fontWeight: "normal",
    color: "#252525",
    paddingTop: 50,
    paddingLeft: 20,
    lineHeight: 28,
  },
  subTitleText: {
    fontWeight: "normal",
    color: "#252525",
    paddingTop: 10,
    paddingLeft: 20,
    fontSize: 18,
  },
});
