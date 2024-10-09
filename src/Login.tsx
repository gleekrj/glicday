import { Image, StyleSheet, View } from "react-native";
import { Text, Button } from "@rneui/themed";
import Glicday from "../src/assets/glicday.png";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={Glicday} />
      <Text h4 h4Style={styles.titleText}>
        Registro de glicose para pessoas com diabetes tipo 2.
      </Text>
      <Button
        title="Entrar com Google"
        icon={{
          name: "google",
          type: "font-awesome",
          size: 20,
          color: "white",
        }}
        iconContainerStyle={{ marginRight: 10 }}
        buttonStyle={{
          backgroundColor: "#1365A0",
          borderRadius: 30,
        }}
        containerStyle={{
          width: "100%",
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate("Termo")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#FBFBFB",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titleText: {
    fontWeight: "normal",
    color: "#252525",
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center",
    lineHeight: 28,
  },
});
